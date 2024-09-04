// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export class RdsParameterGroup extends pulumi.CustomResource {
    /**
     * Get an existing RdsParameterGroup resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: RdsParameterGroupState, opts?: pulumi.CustomResourceOptions): RdsParameterGroup {
        return new RdsParameterGroup(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'alicloud:index/rdsParameterGroup:RdsParameterGroup';

    /**
     * Returns true if the given object is an instance of RdsParameterGroup.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is RdsParameterGroup {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === RdsParameterGroup.__pulumiType;
    }

    public readonly engine!: pulumi.Output<string>;
    public readonly engineVersion!: pulumi.Output<string>;
    public readonly paramDetails!: pulumi.Output<outputs.RdsParameterGroupParamDetail[]>;
    public readonly parameterGroupDesc!: pulumi.Output<string | undefined>;
    public readonly parameterGroupName!: pulumi.Output<string>;

    /**
     * Create a RdsParameterGroup resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: RdsParameterGroupArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: RdsParameterGroupArgs | RdsParameterGroupState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as RdsParameterGroupState | undefined;
            resourceInputs["engine"] = state ? state.engine : undefined;
            resourceInputs["engineVersion"] = state ? state.engineVersion : undefined;
            resourceInputs["paramDetails"] = state ? state.paramDetails : undefined;
            resourceInputs["parameterGroupDesc"] = state ? state.parameterGroupDesc : undefined;
            resourceInputs["parameterGroupName"] = state ? state.parameterGroupName : undefined;
        } else {
            const args = argsOrState as RdsParameterGroupArgs | undefined;
            if ((!args || args.engine === undefined) && !opts.urn) {
                throw new Error("Missing required property 'engine'");
            }
            if ((!args || args.engineVersion === undefined) && !opts.urn) {
                throw new Error("Missing required property 'engineVersion'");
            }
            if ((!args || args.paramDetails === undefined) && !opts.urn) {
                throw new Error("Missing required property 'paramDetails'");
            }
            if ((!args || args.parameterGroupName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'parameterGroupName'");
            }
            resourceInputs["engine"] = args ? args.engine : undefined;
            resourceInputs["engineVersion"] = args ? args.engineVersion : undefined;
            resourceInputs["paramDetails"] = args ? args.paramDetails : undefined;
            resourceInputs["parameterGroupDesc"] = args ? args.parameterGroupDesc : undefined;
            resourceInputs["parameterGroupName"] = args ? args.parameterGroupName : undefined;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(RdsParameterGroup.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering RdsParameterGroup resources.
 */
export interface RdsParameterGroupState {
    engine?: pulumi.Input<string>;
    engineVersion?: pulumi.Input<string>;
    paramDetails?: pulumi.Input<pulumi.Input<inputs.RdsParameterGroupParamDetail>[]>;
    parameterGroupDesc?: pulumi.Input<string>;
    parameterGroupName?: pulumi.Input<string>;
}

/**
 * The set of arguments for constructing a RdsParameterGroup resource.
 */
export interface RdsParameterGroupArgs {
    engine: pulumi.Input<string>;
    engineVersion: pulumi.Input<string>;
    paramDetails: pulumi.Input<pulumi.Input<inputs.RdsParameterGroupParamDetail>[]>;
    parameterGroupDesc?: pulumi.Input<string>;
    parameterGroupName: pulumi.Input<string>;
}
