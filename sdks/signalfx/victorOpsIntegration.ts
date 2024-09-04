// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export class VictorOpsIntegration extends pulumi.CustomResource {
    /**
     * Get an existing VictorOpsIntegration resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: VictorOpsIntegrationState, opts?: pulumi.CustomResourceOptions): VictorOpsIntegration {
        return new VictorOpsIntegration(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'signalfx:index/victorOpsIntegration:VictorOpsIntegration';

    /**
     * Returns true if the given object is an instance of VictorOpsIntegration.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is VictorOpsIntegration {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === VictorOpsIntegration.__pulumiType;
    }

    /**
     * Whether the integration is enabled or not
     */
    public readonly enabled!: pulumi.Output<boolean>;
    /**
     * Name of the integration
     */
    public readonly name!: pulumi.Output<string>;
    /**
     * Opsgenie API URL for integration
     */
    public readonly postUrl!: pulumi.Output<string | undefined>;

    /**
     * Create a VictorOpsIntegration resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: VictorOpsIntegrationArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: VictorOpsIntegrationArgs | VictorOpsIntegrationState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as VictorOpsIntegrationState | undefined;
            resourceInputs["enabled"] = state ? state.enabled : undefined;
            resourceInputs["name"] = state ? state.name : undefined;
            resourceInputs["postUrl"] = state ? state.postUrl : undefined;
        } else {
            const args = argsOrState as VictorOpsIntegrationArgs | undefined;
            if ((!args || args.enabled === undefined) && !opts.urn) {
                throw new Error("Missing required property 'enabled'");
            }
            resourceInputs["enabled"] = args ? args.enabled : undefined;
            resourceInputs["name"] = args ? args.name : undefined;
            resourceInputs["postUrl"] = args ? args.postUrl : undefined;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(VictorOpsIntegration.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering VictorOpsIntegration resources.
 */
export interface VictorOpsIntegrationState {
    /**
     * Whether the integration is enabled or not
     */
    enabled?: pulumi.Input<boolean>;
    /**
     * Name of the integration
     */
    name?: pulumi.Input<string>;
    /**
     * Opsgenie API URL for integration
     */
    postUrl?: pulumi.Input<string>;
}

/**
 * The set of arguments for constructing a VictorOpsIntegration resource.
 */
export interface VictorOpsIntegrationArgs {
    /**
     * Whether the integration is enabled or not
     */
    enabled: pulumi.Input<boolean>;
    /**
     * Name of the integration
     */
    name?: pulumi.Input<string>;
    /**
     * Opsgenie API URL for integration
     */
    postUrl?: pulumi.Input<string>;
}
