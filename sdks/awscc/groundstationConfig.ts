// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export class GroundstationConfig extends pulumi.CustomResource {
    /**
     * Get an existing GroundstationConfig resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: GroundstationConfigState, opts?: pulumi.CustomResourceOptions): GroundstationConfig {
        return new GroundstationConfig(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'awscc:index/groundstationConfig:GroundstationConfig';

    /**
     * Returns true if the given object is an instance of GroundstationConfig.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is GroundstationConfig {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === GroundstationConfig.__pulumiType;
    }

    public /*out*/ readonly arn!: pulumi.Output<string>;
    public readonly configData!: pulumi.Output<outputs.GroundstationConfigConfigData>;
    public /*out*/ readonly configId!: pulumi.Output<string>;
    public readonly name!: pulumi.Output<string>;
    public readonly tags!: pulumi.Output<outputs.GroundstationConfigTag[]>;
    public /*out*/ readonly type!: pulumi.Output<string>;

    /**
     * Create a GroundstationConfig resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: GroundstationConfigArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: GroundstationConfigArgs | GroundstationConfigState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as GroundstationConfigState | undefined;
            resourceInputs["arn"] = state ? state.arn : undefined;
            resourceInputs["configData"] = state ? state.configData : undefined;
            resourceInputs["configId"] = state ? state.configId : undefined;
            resourceInputs["name"] = state ? state.name : undefined;
            resourceInputs["tags"] = state ? state.tags : undefined;
            resourceInputs["type"] = state ? state.type : undefined;
        } else {
            const args = argsOrState as GroundstationConfigArgs | undefined;
            if ((!args || args.configData === undefined) && !opts.urn) {
                throw new Error("Missing required property 'configData'");
            }
            resourceInputs["configData"] = args ? args.configData : undefined;
            resourceInputs["name"] = args ? args.name : undefined;
            resourceInputs["tags"] = args ? args.tags : undefined;
            resourceInputs["arn"] = undefined /*out*/;
            resourceInputs["configId"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(GroundstationConfig.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering GroundstationConfig resources.
 */
export interface GroundstationConfigState {
    arn?: pulumi.Input<string>;
    configData?: pulumi.Input<inputs.GroundstationConfigConfigData>;
    configId?: pulumi.Input<string>;
    name?: pulumi.Input<string>;
    tags?: pulumi.Input<pulumi.Input<inputs.GroundstationConfigTag>[]>;
    type?: pulumi.Input<string>;
}

/**
 * The set of arguments for constructing a GroundstationConfig resource.
 */
export interface GroundstationConfigArgs {
    configData: pulumi.Input<inputs.GroundstationConfigConfigData>;
    name?: pulumi.Input<string>;
    tags?: pulumi.Input<pulumi.Input<inputs.GroundstationConfigTag>[]>;
}
