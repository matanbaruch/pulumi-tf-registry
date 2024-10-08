// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export class DtsMigrateJobResumeOperation extends pulumi.CustomResource {
    /**
     * Get an existing DtsMigrateJobResumeOperation resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: DtsMigrateJobResumeOperationState, opts?: pulumi.CustomResourceOptions): DtsMigrateJobResumeOperation {
        return new DtsMigrateJobResumeOperation(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'tencentcloud:index/dtsMigrateJobResumeOperation:DtsMigrateJobResumeOperation';

    /**
     * Returns true if the given object is an instance of DtsMigrateJobResumeOperation.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is DtsMigrateJobResumeOperation {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === DtsMigrateJobResumeOperation.__pulumiType;
    }

    /**
     * job id.
     */
    public readonly jobId!: pulumi.Output<string>;
    /**
     * resume mode: 1.clearData-Clear target data; 2.overwrite-The task is executed in overwrite mode; 3.normal-No extra
     * action. Note that clearData and overwrite are valid only for redis links, normal is valid only for non-Redis links.
     */
    public readonly resumeOption!: pulumi.Output<string>;

    /**
     * Create a DtsMigrateJobResumeOperation resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: DtsMigrateJobResumeOperationArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: DtsMigrateJobResumeOperationArgs | DtsMigrateJobResumeOperationState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as DtsMigrateJobResumeOperationState | undefined;
            resourceInputs["jobId"] = state ? state.jobId : undefined;
            resourceInputs["resumeOption"] = state ? state.resumeOption : undefined;
        } else {
            const args = argsOrState as DtsMigrateJobResumeOperationArgs | undefined;
            if ((!args || args.jobId === undefined) && !opts.urn) {
                throw new Error("Missing required property 'jobId'");
            }
            if ((!args || args.resumeOption === undefined) && !opts.urn) {
                throw new Error("Missing required property 'resumeOption'");
            }
            resourceInputs["jobId"] = args ? args.jobId : undefined;
            resourceInputs["resumeOption"] = args ? args.resumeOption : undefined;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(DtsMigrateJobResumeOperation.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering DtsMigrateJobResumeOperation resources.
 */
export interface DtsMigrateJobResumeOperationState {
    /**
     * job id.
     */
    jobId?: pulumi.Input<string>;
    /**
     * resume mode: 1.clearData-Clear target data; 2.overwrite-The task is executed in overwrite mode; 3.normal-No extra
     * action. Note that clearData and overwrite are valid only for redis links, normal is valid only for non-Redis links.
     */
    resumeOption?: pulumi.Input<string>;
}

/**
 * The set of arguments for constructing a DtsMigrateJobResumeOperation resource.
 */
export interface DtsMigrateJobResumeOperationArgs {
    /**
     * job id.
     */
    jobId: pulumi.Input<string>;
    /**
     * resume mode: 1.clearData-Clear target data; 2.overwrite-The task is executed in overwrite mode; 3.normal-No extra
     * action. Note that clearData and overwrite are valid only for redis links, normal is valid only for non-Redis links.
     */
    resumeOption: pulumi.Input<string>;
}
