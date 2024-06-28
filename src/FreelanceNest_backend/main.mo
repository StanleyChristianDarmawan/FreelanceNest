import Array "mo:base/Array";
import Time "mo:base/Time";

actor FreelancePlatform {

    type Job = {
        id: Text;
        description: Text;
        status: Text;
        dateCreated: Time.Time;
        dateOpen: Time.Time;
        dateClosed: Time.Time;
        freelancersNeeded: Nat;
        freelancersApplied: Nat;
        totalPrice: Float;
    };

    type Company = {
        id: Text;
        name: Text;
        image: Text;
        jobs: [Job];
    };

    type Freelancer = {
        id: Text;
        firstName: Text;
        lastName: Text;
        profileImage: Text;
        skills: [Text];
        email: Text;
        appliedJobs: [Text];
    };

    stable var companies: [Company] = [];
    stable var freelancers: [Freelancer] = [];

    public query func getCompanies(): async [Company] {
        return companies;
    };

    public query func getFreelancers(): async [Freelancer] {
        return freelancers;
    };

    public func addCompany(newCompany: Company): async () {
        companies := Array.append(companies, [newCompany]);
    };

    public func addFreelancer(newFreelancer: Freelancer): async () {
        freelancers := Array.append(freelancers, [newFreelancer]);
    };

    public func createJob(companyId: Text, newJob: Job): async () {
        var updatedCompanies: [Company] = [];
        for (company in companies.vals()) {
            if (company.id == companyId) {
                let updatedCompany = {
                    id = company.id;
                    name = company.name;
                    image = company.image;
                    jobs = Array.append(company.jobs, [newJob])
                };
                updatedCompanies := Array.append(updatedCompanies, [updatedCompany]);
            } else {
                updatedCompanies := Array.append(updatedCompanies, [company]);
            }
        };
        companies := updatedCompanies;
    };

    public query func getCompanyJobs(companyId: Text): async [Job] {
        for (company in companies.vals()) {
            if (company.id == companyId) {
                return company.jobs;
            }
        };
        return [];
    };

    public query func getFreelancerJobs(freelancerId: Text): async [Job] {
        var appliedJobs: [Job] = [];
        for (freelancer in freelancers.vals()) {
            if (freelancer.id == freelancerId) {
                for (jobId in freelancer.appliedJobs.vals()) {
                    for (company in companies.vals()) {
                        for (job in company.jobs.vals()) {
                            if (job.id == jobId) {
                                appliedJobs := Array.append(appliedJobs, [job]);
                            }
                        }
                    }
                }
            }
        };
        return appliedJobs;
    };
}
