// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export class AppsecAdvancedSettingsPragmaHeader extends pulumi.CustomResource {
    /**
     * Get an existing AppsecAdvancedSettingsPragmaHeader resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: AppsecAdvancedSettingsPragmaHeaderState, opts?: pulumi.CustomResourceOptions): AppsecAdvancedSettingsPragmaHeader {
        return new AppsecAdvancedSettingsPragmaHeader(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'akamai:index/appsecAdvancedSettingsPragmaHeader:AppsecAdvancedSettingsPragmaHeader';

    /**
     * Returns true if the given object is an instance of AppsecAdvancedSettingsPragmaHeader.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is AppsecAdvancedSettingsPragmaHeader {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === AppsecAdvancedSettingsPragmaHeader.__pulumiType;
    }

    /**
     * Unique identifier of the security configuration
     */
    public readonly configId!: pulumi.Output<number>;
    /**
     * JSON-formatted information describing the conditions to exclude from the default remove action
     */
    public readonly pragmaHeader!: pulumi.Output<string>;
    /**
     * Unique identifier of the security policy
     */
    public readonly securityPolicyId!: pulumi.Output<string | undefined>;

    /**
     * Create a AppsecAdvancedSettingsPragmaHeader resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: AppsecAdvancedSettingsPragmaHeaderArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: AppsecAdvancedSettingsPragmaHeaderArgs | AppsecAdvancedSettingsPragmaHeaderState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as AppsecAdvancedSettingsPragmaHeaderState | undefined;
            resourceInputs["configId"] = state ? state.configId : undefined;
            resourceInputs["pragmaHeader"] = state ? state.pragmaHeader : undefined;
            resourceInputs["securityPolicyId"] = state ? state.securityPolicyId : undefined;
        } else {
            const args = argsOrState as AppsecAdvancedSettingsPragmaHeaderArgs | undefined;
            if ((!args || args.configId === undefined) && !opts.urn) {
                throw new Error("Missing required property 'configId'");
            }
            if ((!args || args.pragmaHeader === undefined) && !opts.urn) {
                throw new Error("Missing required property 'pragmaHeader'");
            }
            resourceInputs["configId"] = args ? args.configId : undefined;
            resourceInputs["pragmaHeader"] = args ? args.pragmaHeader : undefined;
            resourceInputs["securityPolicyId"] = args ? args.securityPolicyId : undefined;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(AppsecAdvancedSettingsPragmaHeader.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering AppsecAdvancedSettingsPragmaHeader resources.
 */
export interface AppsecAdvancedSettingsPragmaHeaderState {
    /**
     * Unique identifier of the security configuration
     */
    configId?: pulumi.Input<number>;
    /**
     * JSON-formatted information describing the conditions to exclude from the default remove action
     */
    pragmaHeader?: pulumi.Input<string>;
    /**
     * Unique identifier of the security policy
     */
    securityPolicyId?: pulumi.Input<string>;
}

/**
 * The set of arguments for constructing a AppsecAdvancedSettingsPragmaHeader resource.
 */
export interface AppsecAdvancedSettingsPragmaHeaderArgs {
    /**
     * Unique identifier of the security configuration
     */
    configId: pulumi.Input<number>;
    /**
     * JSON-formatted information describing the conditions to exclude from the default remove action
     */
    pragmaHeader: pulumi.Input<string>;
    /**
     * Unique identifier of the security policy
     */
    securityPolicyId?: pulumi.Input<string>;
}
