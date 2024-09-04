// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export class SecurityhubHub extends pulumi.CustomResource {
    /**
     * Get an existing SecurityhubHub resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: SecurityhubHubState, opts?: pulumi.CustomResourceOptions): SecurityhubHub {
        return new SecurityhubHub(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'awscc:index/securityhubHub:SecurityhubHub';

    /**
     * Returns true if the given object is an instance of SecurityhubHub.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is SecurityhubHub {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === SecurityhubHub.__pulumiType;
    }

    /**
     * An ARN is automatically created for the customer.
     */
    public /*out*/ readonly arn!: pulumi.Output<string>;
    /**
     * Whether to automatically enable new controls when they are added to standards that are enabled
     */
    public readonly autoEnableControls!: pulumi.Output<boolean>;
    /**
     * This field, used when enabling Security Hub, specifies whether the calling account has consolidated control findings
     * turned on. If the value for this field is set to SECURITY_CONTROL, Security Hub generates a single finding for a control
     * check even when the check applies to multiple enabled standards. If the value for this field is set to STANDARD_CONTROL,
     * Security Hub generates separate findings for a control check when the check applies to multiple enabled standards.
     */
    public readonly controlFindingGenerator!: pulumi.Output<string>;
    /**
     * Whether to enable the security standards that Security Hub has designated as automatically enabled.
     */
    public readonly enableDefaultStandards!: pulumi.Output<boolean>;
    /**
     * The date and time when Security Hub was enabled in the account.
     */
    public /*out*/ readonly subscribedAt!: pulumi.Output<string>;
    /**
     * A key-value pair to associate with a resource.
     */
    public readonly tags!: pulumi.Output<{[key: string]: string}>;

    /**
     * Create a SecurityhubHub resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args?: SecurityhubHubArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: SecurityhubHubArgs | SecurityhubHubState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as SecurityhubHubState | undefined;
            resourceInputs["arn"] = state ? state.arn : undefined;
            resourceInputs["autoEnableControls"] = state ? state.autoEnableControls : undefined;
            resourceInputs["controlFindingGenerator"] = state ? state.controlFindingGenerator : undefined;
            resourceInputs["enableDefaultStandards"] = state ? state.enableDefaultStandards : undefined;
            resourceInputs["subscribedAt"] = state ? state.subscribedAt : undefined;
            resourceInputs["tags"] = state ? state.tags : undefined;
        } else {
            const args = argsOrState as SecurityhubHubArgs | undefined;
            resourceInputs["autoEnableControls"] = args ? args.autoEnableControls : undefined;
            resourceInputs["controlFindingGenerator"] = args ? args.controlFindingGenerator : undefined;
            resourceInputs["enableDefaultStandards"] = args ? args.enableDefaultStandards : undefined;
            resourceInputs["tags"] = args ? args.tags : undefined;
            resourceInputs["arn"] = undefined /*out*/;
            resourceInputs["subscribedAt"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(SecurityhubHub.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering SecurityhubHub resources.
 */
export interface SecurityhubHubState {
    /**
     * An ARN is automatically created for the customer.
     */
    arn?: pulumi.Input<string>;
    /**
     * Whether to automatically enable new controls when they are added to standards that are enabled
     */
    autoEnableControls?: pulumi.Input<boolean>;
    /**
     * This field, used when enabling Security Hub, specifies whether the calling account has consolidated control findings
     * turned on. If the value for this field is set to SECURITY_CONTROL, Security Hub generates a single finding for a control
     * check even when the check applies to multiple enabled standards. If the value for this field is set to STANDARD_CONTROL,
     * Security Hub generates separate findings for a control check when the check applies to multiple enabled standards.
     */
    controlFindingGenerator?: pulumi.Input<string>;
    /**
     * Whether to enable the security standards that Security Hub has designated as automatically enabled.
     */
    enableDefaultStandards?: pulumi.Input<boolean>;
    /**
     * The date and time when Security Hub was enabled in the account.
     */
    subscribedAt?: pulumi.Input<string>;
    /**
     * A key-value pair to associate with a resource.
     */
    tags?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
}

/**
 * The set of arguments for constructing a SecurityhubHub resource.
 */
export interface SecurityhubHubArgs {
    /**
     * Whether to automatically enable new controls when they are added to standards that are enabled
     */
    autoEnableControls?: pulumi.Input<boolean>;
    /**
     * This field, used when enabling Security Hub, specifies whether the calling account has consolidated control findings
     * turned on. If the value for this field is set to SECURITY_CONTROL, Security Hub generates a single finding for a control
     * check even when the check applies to multiple enabled standards. If the value for this field is set to STANDARD_CONTROL,
     * Security Hub generates separate findings for a control check when the check applies to multiple enabled standards.
     */
    controlFindingGenerator?: pulumi.Input<string>;
    /**
     * Whether to enable the security standards that Security Hub has designated as automatically enabled.
     */
    enableDefaultStandards?: pulumi.Input<boolean>;
    /**
     * A key-value pair to associate with a resource.
     */
    tags?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
}
