// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export class DtsMigrateJobStartOperation extends pulumi.CustomResource {
    /**
     * Get an existing DtsMigrateJobStartOperation resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: DtsMigrateJobStartOperationState, opts?: pulumi.CustomResourceOptions): DtsMigrateJobStartOperation {
        return new DtsMigrateJobStartOperation(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'tencentcloud:index/dtsMigrateJobStartOperation:DtsMigrateJobStartOperation';

    /**
     * Returns true if the given object is an instance of DtsMigrateJobStartOperation.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is DtsMigrateJobStartOperation {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === DtsMigrateJobStartOperation.__pulumiType;
    }

    /**
     * Job Id from `tencentcloud.DtsMigrateJob`.
     */
    public readonly jobId!: pulumi.Output<string>;

    /**
     * Create a DtsMigrateJobStartOperation resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: DtsMigrateJobStartOperationArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: DtsMigrateJobStartOperationArgs | DtsMigrateJobStartOperationState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as DtsMigrateJobStartOperationState | undefined;
            resourceInputs["jobId"] = state ? state.jobId : undefined;
        } else {
            const args = argsOrState as DtsMigrateJobStartOperationArgs | undefined;
            if ((!args || args.jobId === undefined) && !opts.urn) {
                throw new Error("Missing required property 'jobId'");
            }
            resourceInputs["jobId"] = args ? args.jobId : undefined;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(DtsMigrateJobStartOperation.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering DtsMigrateJobStartOperation resources.
 */
export interface DtsMigrateJobStartOperationState {
    /**
     * Job Id from `tencentcloud.DtsMigrateJob`.
     */
    jobId?: pulumi.Input<string>;
}

/**
 * The set of arguments for constructing a DtsMigrateJobStartOperation resource.
 */
export interface DtsMigrateJobStartOperationArgs {
    /**
     * Job Id from `tencentcloud.DtsMigrateJob`.
     */
    jobId: pulumi.Input<string>;
}
