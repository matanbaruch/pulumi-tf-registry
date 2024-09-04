// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export class DlcRollbackDataEngineImageOperation extends pulumi.CustomResource {
    /**
     * Get an existing DlcRollbackDataEngineImageOperation resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: DlcRollbackDataEngineImageOperationState, opts?: pulumi.CustomResourceOptions): DlcRollbackDataEngineImageOperation {
        return new DlcRollbackDataEngineImageOperation(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'tencentcloud:index/dlcRollbackDataEngineImageOperation:DlcRollbackDataEngineImageOperation';

    /**
     * Returns true if the given object is an instance of DlcRollbackDataEngineImageOperation.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is DlcRollbackDataEngineImageOperation {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === DlcRollbackDataEngineImageOperation.__pulumiType;
    }

    /**
     * Engine unique id.
     */
    public readonly dataEngineId!: pulumi.Output<string>;
    /**
     * Log record id before rollback.
     */
    public readonly fromRecordId!: pulumi.Output<string | undefined>;
    /**
     * Log record id after rollback.
     */
    public readonly toRecordId!: pulumi.Output<string | undefined>;

    /**
     * Create a DlcRollbackDataEngineImageOperation resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: DlcRollbackDataEngineImageOperationArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: DlcRollbackDataEngineImageOperationArgs | DlcRollbackDataEngineImageOperationState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as DlcRollbackDataEngineImageOperationState | undefined;
            resourceInputs["dataEngineId"] = state ? state.dataEngineId : undefined;
            resourceInputs["fromRecordId"] = state ? state.fromRecordId : undefined;
            resourceInputs["toRecordId"] = state ? state.toRecordId : undefined;
        } else {
            const args = argsOrState as DlcRollbackDataEngineImageOperationArgs | undefined;
            if ((!args || args.dataEngineId === undefined) && !opts.urn) {
                throw new Error("Missing required property 'dataEngineId'");
            }
            resourceInputs["dataEngineId"] = args ? args.dataEngineId : undefined;
            resourceInputs["fromRecordId"] = args ? args.fromRecordId : undefined;
            resourceInputs["toRecordId"] = args ? args.toRecordId : undefined;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(DlcRollbackDataEngineImageOperation.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering DlcRollbackDataEngineImageOperation resources.
 */
export interface DlcRollbackDataEngineImageOperationState {
    /**
     * Engine unique id.
     */
    dataEngineId?: pulumi.Input<string>;
    /**
     * Log record id before rollback.
     */
    fromRecordId?: pulumi.Input<string>;
    /**
     * Log record id after rollback.
     */
    toRecordId?: pulumi.Input<string>;
}

/**
 * The set of arguments for constructing a DlcRollbackDataEngineImageOperation resource.
 */
export interface DlcRollbackDataEngineImageOperationArgs {
    /**
     * Engine unique id.
     */
    dataEngineId: pulumi.Input<string>;
    /**
     * Log record id before rollback.
     */
    fromRecordId?: pulumi.Input<string>;
    /**
     * Log record id after rollback.
     */
    toRecordId?: pulumi.Input<string>;
}
