// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export class DlcModifyDataEngineDescriptionOperation extends pulumi.CustomResource {
    /**
     * Get an existing DlcModifyDataEngineDescriptionOperation resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: DlcModifyDataEngineDescriptionOperationState, opts?: pulumi.CustomResourceOptions): DlcModifyDataEngineDescriptionOperation {
        return new DlcModifyDataEngineDescriptionOperation(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'tencentcloud:index/dlcModifyDataEngineDescriptionOperation:DlcModifyDataEngineDescriptionOperation';

    /**
     * Returns true if the given object is an instance of DlcModifyDataEngineDescriptionOperation.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is DlcModifyDataEngineDescriptionOperation {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === DlcModifyDataEngineDescriptionOperation.__pulumiType;
    }

    /**
     * The name of the engine to modify.
     */
    public readonly dataEngineName!: pulumi.Output<string>;
    /**
     * Engine description information, the maximum length is 250.
     */
    public readonly message!: pulumi.Output<string>;

    /**
     * Create a DlcModifyDataEngineDescriptionOperation resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: DlcModifyDataEngineDescriptionOperationArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: DlcModifyDataEngineDescriptionOperationArgs | DlcModifyDataEngineDescriptionOperationState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as DlcModifyDataEngineDescriptionOperationState | undefined;
            resourceInputs["dataEngineName"] = state ? state.dataEngineName : undefined;
            resourceInputs["message"] = state ? state.message : undefined;
        } else {
            const args = argsOrState as DlcModifyDataEngineDescriptionOperationArgs | undefined;
            if ((!args || args.dataEngineName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'dataEngineName'");
            }
            if ((!args || args.message === undefined) && !opts.urn) {
                throw new Error("Missing required property 'message'");
            }
            resourceInputs["dataEngineName"] = args ? args.dataEngineName : undefined;
            resourceInputs["message"] = args ? args.message : undefined;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(DlcModifyDataEngineDescriptionOperation.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering DlcModifyDataEngineDescriptionOperation resources.
 */
export interface DlcModifyDataEngineDescriptionOperationState {
    /**
     * The name of the engine to modify.
     */
    dataEngineName?: pulumi.Input<string>;
    /**
     * Engine description information, the maximum length is 250.
     */
    message?: pulumi.Input<string>;
}

/**
 * The set of arguments for constructing a DlcModifyDataEngineDescriptionOperation resource.
 */
export interface DlcModifyDataEngineDescriptionOperationArgs {
    /**
     * The name of the engine to modify.
     */
    dataEngineName: pulumi.Input<string>;
    /**
     * Engine description information, the maximum length is 250.
     */
    message: pulumi.Input<string>;
}
