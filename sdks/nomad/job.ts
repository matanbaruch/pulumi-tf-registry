// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export class Job extends pulumi.CustomResource {
    /**
     * Get an existing Job resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: JobState, opts?: pulumi.CustomResourceOptions): Job {
        return new Job(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'nomad:index/job:Job';

    /**
     * Returns true if the given object is an instance of Job.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is Job {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === Job.__pulumiType;
    }

    /**
     * The IDs for allocations associated with this job.
     *
     * @deprecated Deprecated
     */
    public /*out*/ readonly allocationIds!: pulumi.Output<string[]>;
    /**
     * The Consul token used to submit this job.
     */
    public readonly consulToken!: pulumi.Output<string | undefined>;
    /**
     * The target datacenters for the job, as derived from the jobspec.
     */
    public /*out*/ readonly datacenters!: pulumi.Output<string[]>;
    /**
     * If detach = false, the ID for the deployment associated with the last job create/update, if one exists.
     */
    public /*out*/ readonly deploymentId!: pulumi.Output<string>;
    /**
     * If detach = false, the status for the deployment associated with the last job create/update, if one exists.
     */
    public /*out*/ readonly deploymentStatus!: pulumi.Output<string>;
    /**
     * If true, the job will be deregistered on destroy.
     */
    public readonly deregisterOnDestroy!: pulumi.Output<boolean | undefined>;
    /**
     * If true, the job will be deregistered when the job ID changes.
     */
    public readonly deregisterOnIdChange!: pulumi.Output<boolean | undefined>;
    /**
     * If true, the provider will return immediately after creating or updating, instead of monitoring.
     */
    public readonly detach!: pulumi.Output<boolean | undefined>;
    /**
     * If true, the `jobspec` will be parsed using the HCL1 format.
     */
    public readonly hcl1!: pulumi.Output<boolean | undefined>;
    /**
     * Configuration for the HCL2 jobspec parser.
     */
    public readonly hcl2!: pulumi.Output<outputs.JobHcl2 | undefined>;
    /**
     * Job specification. If you want to point to a file use the file() function.
     */
    public readonly jobspec!: pulumi.Output<string>;
    /**
     * If true, the `jobspec` will be parsed as json instead of HCL.
     */
    public readonly json!: pulumi.Output<boolean | undefined>;
    /**
     * Integer that increments for each change. Used to detect any changes between plan and apply.
     */
    public /*out*/ readonly modifyIndex!: pulumi.Output<string>;
    /**
     * The name of the job, as derived from the jobspec.
     */
    public /*out*/ readonly name!: pulumi.Output<string>;
    /**
     * The namespace of the job, as derived from the jobspec.
     */
    public /*out*/ readonly namespace!: pulumi.Output<string>;
    /**
     * Override any soft-mandatory Sentinel policies that fail.
     */
    public readonly policyOverride!: pulumi.Output<boolean | undefined>;
    /**
     * Whether to purge the job when the resource is destroyed.
     */
    public readonly purgeOnDestroy!: pulumi.Output<boolean | undefined>;
    /**
     * @deprecated Deprecated
     */
    public readonly readAllocationIds!: pulumi.Output<boolean | undefined>;
    /**
     * The target region for the job, as derived from the jobspec.
     */
    public /*out*/ readonly region!: pulumi.Output<string>;
    /**
     * If true, forces the job to run again on apply if it is currently dead
     */
    public readonly rerunIfDead!: pulumi.Output<boolean | undefined>;
    /**
     * The status of the job.
     */
    public /*out*/ readonly status!: pulumi.Output<string>;
    public /*out*/ readonly taskGroups!: pulumi.Output<outputs.JobTaskGroup[]>;
    public readonly timeouts!: pulumi.Output<outputs.JobTimeouts | undefined>;
    /**
     * The type of the job, as derived from the jobspec.
     */
    public /*out*/ readonly type!: pulumi.Output<string>;
    /**
     * The Vault token used to submit this job.
     */
    public readonly vaultToken!: pulumi.Output<string | undefined>;

    /**
     * Create a Job resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: JobArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: JobArgs | JobState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as JobState | undefined;
            resourceInputs["allocationIds"] = state ? state.allocationIds : undefined;
            resourceInputs["consulToken"] = state ? state.consulToken : undefined;
            resourceInputs["datacenters"] = state ? state.datacenters : undefined;
            resourceInputs["deploymentId"] = state ? state.deploymentId : undefined;
            resourceInputs["deploymentStatus"] = state ? state.deploymentStatus : undefined;
            resourceInputs["deregisterOnDestroy"] = state ? state.deregisterOnDestroy : undefined;
            resourceInputs["deregisterOnIdChange"] = state ? state.deregisterOnIdChange : undefined;
            resourceInputs["detach"] = state ? state.detach : undefined;
            resourceInputs["hcl1"] = state ? state.hcl1 : undefined;
            resourceInputs["hcl2"] = state ? state.hcl2 : undefined;
            resourceInputs["jobspec"] = state ? state.jobspec : undefined;
            resourceInputs["json"] = state ? state.json : undefined;
            resourceInputs["modifyIndex"] = state ? state.modifyIndex : undefined;
            resourceInputs["name"] = state ? state.name : undefined;
            resourceInputs["namespace"] = state ? state.namespace : undefined;
            resourceInputs["policyOverride"] = state ? state.policyOverride : undefined;
            resourceInputs["purgeOnDestroy"] = state ? state.purgeOnDestroy : undefined;
            resourceInputs["readAllocationIds"] = state ? state.readAllocationIds : undefined;
            resourceInputs["region"] = state ? state.region : undefined;
            resourceInputs["rerunIfDead"] = state ? state.rerunIfDead : undefined;
            resourceInputs["status"] = state ? state.status : undefined;
            resourceInputs["taskGroups"] = state ? state.taskGroups : undefined;
            resourceInputs["timeouts"] = state ? state.timeouts : undefined;
            resourceInputs["type"] = state ? state.type : undefined;
            resourceInputs["vaultToken"] = state ? state.vaultToken : undefined;
        } else {
            const args = argsOrState as JobArgs | undefined;
            if ((!args || args.jobspec === undefined) && !opts.urn) {
                throw new Error("Missing required property 'jobspec'");
            }
            resourceInputs["consulToken"] = args?.consulToken ? pulumi.secret(args.consulToken) : undefined;
            resourceInputs["deregisterOnDestroy"] = args ? args.deregisterOnDestroy : undefined;
            resourceInputs["deregisterOnIdChange"] = args ? args.deregisterOnIdChange : undefined;
            resourceInputs["detach"] = args ? args.detach : undefined;
            resourceInputs["hcl1"] = args ? args.hcl1 : undefined;
            resourceInputs["hcl2"] = args ? args.hcl2 : undefined;
            resourceInputs["jobspec"] = args ? args.jobspec : undefined;
            resourceInputs["json"] = args ? args.json : undefined;
            resourceInputs["policyOverride"] = args ? args.policyOverride : undefined;
            resourceInputs["purgeOnDestroy"] = args ? args.purgeOnDestroy : undefined;
            resourceInputs["readAllocationIds"] = args ? args.readAllocationIds : undefined;
            resourceInputs["rerunIfDead"] = args ? args.rerunIfDead : undefined;
            resourceInputs["timeouts"] = args ? args.timeouts : undefined;
            resourceInputs["vaultToken"] = args?.vaultToken ? pulumi.secret(args.vaultToken) : undefined;
            resourceInputs["allocationIds"] = undefined /*out*/;
            resourceInputs["datacenters"] = undefined /*out*/;
            resourceInputs["deploymentId"] = undefined /*out*/;
            resourceInputs["deploymentStatus"] = undefined /*out*/;
            resourceInputs["modifyIndex"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["namespace"] = undefined /*out*/;
            resourceInputs["region"] = undefined /*out*/;
            resourceInputs["status"] = undefined /*out*/;
            resourceInputs["taskGroups"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const secretOpts = { additionalSecretOutputs: ["consulToken", "vaultToken"] };
        opts = pulumi.mergeOptions(opts, secretOpts);
        super(Job.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering Job resources.
 */
export interface JobState {
    /**
     * The IDs for allocations associated with this job.
     *
     * @deprecated Deprecated
     */
    allocationIds?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * The Consul token used to submit this job.
     */
    consulToken?: pulumi.Input<string>;
    /**
     * The target datacenters for the job, as derived from the jobspec.
     */
    datacenters?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * If detach = false, the ID for the deployment associated with the last job create/update, if one exists.
     */
    deploymentId?: pulumi.Input<string>;
    /**
     * If detach = false, the status for the deployment associated with the last job create/update, if one exists.
     */
    deploymentStatus?: pulumi.Input<string>;
    /**
     * If true, the job will be deregistered on destroy.
     */
    deregisterOnDestroy?: pulumi.Input<boolean>;
    /**
     * If true, the job will be deregistered when the job ID changes.
     */
    deregisterOnIdChange?: pulumi.Input<boolean>;
    /**
     * If true, the provider will return immediately after creating or updating, instead of monitoring.
     */
    detach?: pulumi.Input<boolean>;
    /**
     * If true, the `jobspec` will be parsed using the HCL1 format.
     */
    hcl1?: pulumi.Input<boolean>;
    /**
     * Configuration for the HCL2 jobspec parser.
     */
    hcl2?: pulumi.Input<inputs.JobHcl2>;
    /**
     * Job specification. If you want to point to a file use the file() function.
     */
    jobspec?: pulumi.Input<string>;
    /**
     * If true, the `jobspec` will be parsed as json instead of HCL.
     */
    json?: pulumi.Input<boolean>;
    /**
     * Integer that increments for each change. Used to detect any changes between plan and apply.
     */
    modifyIndex?: pulumi.Input<string>;
    /**
     * The name of the job, as derived from the jobspec.
     */
    name?: pulumi.Input<string>;
    /**
     * The namespace of the job, as derived from the jobspec.
     */
    namespace?: pulumi.Input<string>;
    /**
     * Override any soft-mandatory Sentinel policies that fail.
     */
    policyOverride?: pulumi.Input<boolean>;
    /**
     * Whether to purge the job when the resource is destroyed.
     */
    purgeOnDestroy?: pulumi.Input<boolean>;
    /**
     * @deprecated Deprecated
     */
    readAllocationIds?: pulumi.Input<boolean>;
    /**
     * The target region for the job, as derived from the jobspec.
     */
    region?: pulumi.Input<string>;
    /**
     * If true, forces the job to run again on apply if it is currently dead
     */
    rerunIfDead?: pulumi.Input<boolean>;
    /**
     * The status of the job.
     */
    status?: pulumi.Input<string>;
    taskGroups?: pulumi.Input<pulumi.Input<inputs.JobTaskGroup>[]>;
    timeouts?: pulumi.Input<inputs.JobTimeouts>;
    /**
     * The type of the job, as derived from the jobspec.
     */
    type?: pulumi.Input<string>;
    /**
     * The Vault token used to submit this job.
     */
    vaultToken?: pulumi.Input<string>;
}

/**
 * The set of arguments for constructing a Job resource.
 */
export interface JobArgs {
    /**
     * The Consul token used to submit this job.
     */
    consulToken?: pulumi.Input<string>;
    /**
     * If true, the job will be deregistered on destroy.
     */
    deregisterOnDestroy?: pulumi.Input<boolean>;
    /**
     * If true, the job will be deregistered when the job ID changes.
     */
    deregisterOnIdChange?: pulumi.Input<boolean>;
    /**
     * If true, the provider will return immediately after creating or updating, instead of monitoring.
     */
    detach?: pulumi.Input<boolean>;
    /**
     * If true, the `jobspec` will be parsed using the HCL1 format.
     */
    hcl1?: pulumi.Input<boolean>;
    /**
     * Configuration for the HCL2 jobspec parser.
     */
    hcl2?: pulumi.Input<inputs.JobHcl2>;
    /**
     * Job specification. If you want to point to a file use the file() function.
     */
    jobspec: pulumi.Input<string>;
    /**
     * If true, the `jobspec` will be parsed as json instead of HCL.
     */
    json?: pulumi.Input<boolean>;
    /**
     * Override any soft-mandatory Sentinel policies that fail.
     */
    policyOverride?: pulumi.Input<boolean>;
    /**
     * Whether to purge the job when the resource is destroyed.
     */
    purgeOnDestroy?: pulumi.Input<boolean>;
    /**
     * @deprecated Deprecated
     */
    readAllocationIds?: pulumi.Input<boolean>;
    /**
     * If true, forces the job to run again on apply if it is currently dead
     */
    rerunIfDead?: pulumi.Input<boolean>;
    timeouts?: pulumi.Input<inputs.JobTimeouts>;
    /**
     * The Vault token used to submit this job.
     */
    vaultToken?: pulumi.Input<string>;
}
