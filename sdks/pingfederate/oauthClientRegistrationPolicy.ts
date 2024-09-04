// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export class OauthClientRegistrationPolicy extends pulumi.CustomResource {
    /**
     * Get an existing OauthClientRegistrationPolicy resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: OauthClientRegistrationPolicyState, opts?: pulumi.CustomResourceOptions): OauthClientRegistrationPolicy {
        return new OauthClientRegistrationPolicy(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'pingfederate:index/oauthClientRegistrationPolicy:OauthClientRegistrationPolicy';

    /**
     * Returns true if the given object is an instance of OauthClientRegistrationPolicy.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is OauthClientRegistrationPolicy {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === OauthClientRegistrationPolicy.__pulumiType;
    }

    /**
     * Plugin instance configuration.
     */
    public readonly configuration!: pulumi.Output<outputs.OauthClientRegistrationPolicyConfiguration>;
    /**
     * The plugin instance name. The name cannot be modified once the instance is created.
     */
    public readonly name!: pulumi.Output<string>;
    /**
     * The reference to this plugin's parent instance. The parent reference is only accepted if the plugin type supports parent
     * instances. Note: This parent reference is required if this plugin instance is used as an overriding plugin (e.g.
     * connection adapter overrides)
     */
    public readonly parentRef!: pulumi.Output<outputs.OauthClientRegistrationPolicyParentRef | undefined>;
    /**
     * Reference to the plugin descriptor for this instance. The plugin descriptor cannot be modified once the instance is
     * created. Note: Ignored when specifying a connection's adapter override.
     */
    public readonly pluginDescriptorRef!: pulumi.Output<outputs.OauthClientRegistrationPolicyPluginDescriptorRef>;
    /**
     * The persistent, unique ID for the plugin instance. It can be any combination of [a-zA-Z0-9._-]. This property is
     * system-assigned if not specified.
     */
    public readonly policyId!: pulumi.Output<string>;

    /**
     * Create a OauthClientRegistrationPolicy resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: OauthClientRegistrationPolicyArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: OauthClientRegistrationPolicyArgs | OauthClientRegistrationPolicyState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as OauthClientRegistrationPolicyState | undefined;
            resourceInputs["configuration"] = state ? state.configuration : undefined;
            resourceInputs["name"] = state ? state.name : undefined;
            resourceInputs["parentRef"] = state ? state.parentRef : undefined;
            resourceInputs["pluginDescriptorRef"] = state ? state.pluginDescriptorRef : undefined;
            resourceInputs["policyId"] = state ? state.policyId : undefined;
        } else {
            const args = argsOrState as OauthClientRegistrationPolicyArgs | undefined;
            if ((!args || args.configuration === undefined) && !opts.urn) {
                throw new Error("Missing required property 'configuration'");
            }
            if ((!args || args.pluginDescriptorRef === undefined) && !opts.urn) {
                throw new Error("Missing required property 'pluginDescriptorRef'");
            }
            resourceInputs["configuration"] = args ? args.configuration : undefined;
            resourceInputs["name"] = args ? args.name : undefined;
            resourceInputs["parentRef"] = args ? args.parentRef : undefined;
            resourceInputs["pluginDescriptorRef"] = args ? args.pluginDescriptorRef : undefined;
            resourceInputs["policyId"] = args ? args.policyId : undefined;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(OauthClientRegistrationPolicy.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering OauthClientRegistrationPolicy resources.
 */
export interface OauthClientRegistrationPolicyState {
    /**
     * Plugin instance configuration.
     */
    configuration?: pulumi.Input<inputs.OauthClientRegistrationPolicyConfiguration>;
    /**
     * The plugin instance name. The name cannot be modified once the instance is created.
     */
    name?: pulumi.Input<string>;
    /**
     * The reference to this plugin's parent instance. The parent reference is only accepted if the plugin type supports parent
     * instances. Note: This parent reference is required if this plugin instance is used as an overriding plugin (e.g.
     * connection adapter overrides)
     */
    parentRef?: pulumi.Input<inputs.OauthClientRegistrationPolicyParentRef>;
    /**
     * Reference to the plugin descriptor for this instance. The plugin descriptor cannot be modified once the instance is
     * created. Note: Ignored when specifying a connection's adapter override.
     */
    pluginDescriptorRef?: pulumi.Input<inputs.OauthClientRegistrationPolicyPluginDescriptorRef>;
    /**
     * The persistent, unique ID for the plugin instance. It can be any combination of [a-zA-Z0-9._-]. This property is
     * system-assigned if not specified.
     */
    policyId?: pulumi.Input<string>;
}

/**
 * The set of arguments for constructing a OauthClientRegistrationPolicy resource.
 */
export interface OauthClientRegistrationPolicyArgs {
    /**
     * Plugin instance configuration.
     */
    configuration: pulumi.Input<inputs.OauthClientRegistrationPolicyConfiguration>;
    /**
     * The plugin instance name. The name cannot be modified once the instance is created.
     */
    name?: pulumi.Input<string>;
    /**
     * The reference to this plugin's parent instance. The parent reference is only accepted if the plugin type supports parent
     * instances. Note: This parent reference is required if this plugin instance is used as an overriding plugin (e.g.
     * connection adapter overrides)
     */
    parentRef?: pulumi.Input<inputs.OauthClientRegistrationPolicyParentRef>;
    /**
     * Reference to the plugin descriptor for this instance. The plugin descriptor cannot be modified once the instance is
     * created. Note: Ignored when specifying a connection's adapter override.
     */
    pluginDescriptorRef: pulumi.Input<inputs.OauthClientRegistrationPolicyPluginDescriptorRef>;
    /**
     * The persistent, unique ID for the plugin instance. It can be any combination of [a-zA-Z0-9._-]. This property is
     * system-assigned if not specified.
     */
    policyId?: pulumi.Input<string>;
}
