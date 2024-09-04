// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export class DtsSyncJobRecoverOperation extends pulumi.CustomResource {
    /**
     * Get an existing DtsSyncJobRecoverOperation resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: DtsSyncJobRecoverOperationState, opts?: pulumi.CustomResourceOptions): DtsSyncJobRecoverOperation {
        return new DtsSyncJobRecoverOperation(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'tencentcloud:index/dtsSyncJobRecoverOperation:DtsSyncJobRecoverOperation';

    /**
     * Returns true if the given object is an instance of DtsSyncJobRecoverOperation.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is DtsSyncJobRecoverOperation {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === DtsSyncJobRecoverOperation.__pulumiType;
    }

    /**
     * Synchronization instance id (i.e. identifies a synchronization job).
     */
    public readonly jobId!: pulumi.Output<string>;

    /**
     * Create a DtsSyncJobRecoverOperation resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: DtsSyncJobRecoverOperationArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: DtsSyncJobRecoverOperationArgs | DtsSyncJobRecoverOperationState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as DtsSyncJobRecoverOperationState | undefined;
            resourceInputs["jobId"] = state ? state.jobId : undefined;
        } else {
            const args = argsOrState as DtsSyncJobRecoverOperationArgs | undefined;
            if ((!args || args.jobId === undefined) && !opts.urn) {
                throw new Error("Missing required property 'jobId'");
            }
            resourceInputs["jobId"] = args ? args.jobId : undefined;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(DtsSyncJobRecoverOperation.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering DtsSyncJobRecoverOperation resources.
 */
export interface DtsSyncJobRecoverOperationState {
    /**
     * Synchronization instance id (i.e. identifies a synchronization job).
     */
    jobId?: pulumi.Input<string>;
}

/**
 * The set of arguments for constructing a DtsSyncJobRecoverOperation resource.
 */
export interface DtsSyncJobRecoverOperationArgs {
    /**
     * Synchronization instance id (i.e. identifies a synchronization job).
     */
    jobId: pulumi.Input<string>;
}
