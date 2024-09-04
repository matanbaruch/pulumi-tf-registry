// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export class SignOnPolicyAction extends pulumi.CustomResource {
    /**
     * Get an existing SignOnPolicyAction resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: SignOnPolicyActionState, opts?: pulumi.CustomResourceOptions): SignOnPolicyAction {
        return new SignOnPolicyAction(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'pingone:index/signOnPolicyAction:SignOnPolicyAction';

    /**
     * Returns true if the given object is an instance of SignOnPolicyAction.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is SignOnPolicyAction {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === SignOnPolicyAction.__pulumiType;
    }

    /**
     * Options specific to the **Agreements** policy action.
     */
    public readonly agreement!: pulumi.Output<outputs.SignOnPolicyActionAgreement | undefined>;
    /**
     * Conditions to apply to the sign on policy action. Applies to policy actions of type `agreement`, `identifier_first`,
     * `identity_provider`, `login`, `mfa`, `progressive_profiling`.
     */
    public readonly conditions!: pulumi.Output<outputs.SignOnPolicyActionConditions | undefined>;
    /**
     * A boolean that if set to true and if the user's account is locked (the account.canAuthenticate attribute is set to
     * false), then social sign on with an external identity provider is prevented. Defaults to `false`.
     */
    public readonly enforceLockoutForIdentityProviders!: pulumi.Output<boolean | undefined>;
    /**
     * The ID of the environment to create the sign on policy action in.
     */
    public readonly environmentId!: pulumi.Output<string>;
    /**
     * Options specific to the **Identifier First** policy action.
     */
    public readonly identifierFirst!: pulumi.Output<outputs.SignOnPolicyActionIdentifierFirst | undefined>;
    /**
     * Options specific to the **Identity Provider** policy action.
     */
    public readonly identityProvider!: pulumi.Output<outputs.SignOnPolicyActionIdentityProvider | undefined>;
    /**
     * Options specific to the **Login** policy action.
     */
    public readonly login!: pulumi.Output<outputs.SignOnPolicyActionLogin | undefined>;
    /**
     * Options specific to the **Multi-factor Authentication** policy action.
     */
    public readonly mfa!: pulumi.Output<outputs.SignOnPolicyActionMfa | undefined>;
    /**
     * Options specific to the **PingID** policy action. This action can only be applied to Workforce solution context
     * environments that have the PingID and SSO services enabled.
     */
    public readonly pingid!: pulumi.Output<outputs.SignOnPolicyActionPingid | undefined>;
    /**
     * Options specific to the **PingID Windows Login Passwordless** policy action. This action can only be applied to
     * Workforce solution context environments that have the PingID and SSO services enabled.
     */
    public readonly pingidWindowsLoginPasswordless!: pulumi.Output<outputs.SignOnPolicyActionPingidWindowsLoginPasswordless | undefined>;
    /**
     * An integer that specifies the order in which the policy referenced by this assignment is evaluated during an
     * authentication flow relative to other policies. An assignment with a lower priority will be evaluated first.
     */
    public readonly priority!: pulumi.Output<number>;
    /**
     * Options specific to the **Progressive Profiling** policy action.
     */
    public readonly progressiveProfiling!: pulumi.Output<outputs.SignOnPolicyActionProgressiveProfiling | undefined>;
    /**
     * A boolean that specifies whether users must confirm data returned from an identity provider prior to registration. Users
     * can modify the data and omit non-required attributes. Modified attributes are added to the user's profile during account
     * creation. Defaults to `false`.
     */
    public readonly registrationConfirmUserAttributes!: pulumi.Output<boolean | undefined>;
    /**
     * A string that specifies the link to the external identity provider's identity store. This property is set when the
     * administrator chooses to have users register in an external identity store. This attribute can be set only when the
     * registration.enabled property is set to false.
     */
    public readonly registrationExternalHref!: pulumi.Output<string | undefined>;
    /**
     * A string that specifies the population ID associated with the newly registered user. Setting this enables local
     * registration features.
     */
    public readonly registrationLocalPopulationId!: pulumi.Output<string | undefined>;
    /**
     * The ID of the sign on policy to associate the sign on policy action to.
     */
    public readonly signOnPolicyId!: pulumi.Output<string>;
    /**
     * One or more IDs of the identity providers that can be used for the social login sign-on flow.
     */
    public readonly socialProviderIds!: pulumi.Output<string[] | undefined>;

    /**
     * Create a SignOnPolicyAction resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: SignOnPolicyActionArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: SignOnPolicyActionArgs | SignOnPolicyActionState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as SignOnPolicyActionState | undefined;
            resourceInputs["agreement"] = state ? state.agreement : undefined;
            resourceInputs["conditions"] = state ? state.conditions : undefined;
            resourceInputs["enforceLockoutForIdentityProviders"] = state ? state.enforceLockoutForIdentityProviders : undefined;
            resourceInputs["environmentId"] = state ? state.environmentId : undefined;
            resourceInputs["identifierFirst"] = state ? state.identifierFirst : undefined;
            resourceInputs["identityProvider"] = state ? state.identityProvider : undefined;
            resourceInputs["login"] = state ? state.login : undefined;
            resourceInputs["mfa"] = state ? state.mfa : undefined;
            resourceInputs["pingid"] = state ? state.pingid : undefined;
            resourceInputs["pingidWindowsLoginPasswordless"] = state ? state.pingidWindowsLoginPasswordless : undefined;
            resourceInputs["priority"] = state ? state.priority : undefined;
            resourceInputs["progressiveProfiling"] = state ? state.progressiveProfiling : undefined;
            resourceInputs["registrationConfirmUserAttributes"] = state ? state.registrationConfirmUserAttributes : undefined;
            resourceInputs["registrationExternalHref"] = state ? state.registrationExternalHref : undefined;
            resourceInputs["registrationLocalPopulationId"] = state ? state.registrationLocalPopulationId : undefined;
            resourceInputs["signOnPolicyId"] = state ? state.signOnPolicyId : undefined;
            resourceInputs["socialProviderIds"] = state ? state.socialProviderIds : undefined;
        } else {
            const args = argsOrState as SignOnPolicyActionArgs | undefined;
            if ((!args || args.environmentId === undefined) && !opts.urn) {
                throw new Error("Missing required property 'environmentId'");
            }
            if ((!args || args.priority === undefined) && !opts.urn) {
                throw new Error("Missing required property 'priority'");
            }
            if ((!args || args.signOnPolicyId === undefined) && !opts.urn) {
                throw new Error("Missing required property 'signOnPolicyId'");
            }
            resourceInputs["agreement"] = args ? args.agreement : undefined;
            resourceInputs["conditions"] = args ? args.conditions : undefined;
            resourceInputs["enforceLockoutForIdentityProviders"] = args ? args.enforceLockoutForIdentityProviders : undefined;
            resourceInputs["environmentId"] = args ? args.environmentId : undefined;
            resourceInputs["identifierFirst"] = args ? args.identifierFirst : undefined;
            resourceInputs["identityProvider"] = args ? args.identityProvider : undefined;
            resourceInputs["login"] = args ? args.login : undefined;
            resourceInputs["mfa"] = args ? args.mfa : undefined;
            resourceInputs["pingid"] = args ? args.pingid : undefined;
            resourceInputs["pingidWindowsLoginPasswordless"] = args ? args.pingidWindowsLoginPasswordless : undefined;
            resourceInputs["priority"] = args ? args.priority : undefined;
            resourceInputs["progressiveProfiling"] = args ? args.progressiveProfiling : undefined;
            resourceInputs["registrationConfirmUserAttributes"] = args ? args.registrationConfirmUserAttributes : undefined;
            resourceInputs["registrationExternalHref"] = args ? args.registrationExternalHref : undefined;
            resourceInputs["registrationLocalPopulationId"] = args ? args.registrationLocalPopulationId : undefined;
            resourceInputs["signOnPolicyId"] = args ? args.signOnPolicyId : undefined;
            resourceInputs["socialProviderIds"] = args ? args.socialProviderIds : undefined;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(SignOnPolicyAction.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering SignOnPolicyAction resources.
 */
export interface SignOnPolicyActionState {
    /**
     * Options specific to the **Agreements** policy action.
     */
    agreement?: pulumi.Input<inputs.SignOnPolicyActionAgreement>;
    /**
     * Conditions to apply to the sign on policy action. Applies to policy actions of type `agreement`, `identifier_first`,
     * `identity_provider`, `login`, `mfa`, `progressive_profiling`.
     */
    conditions?: pulumi.Input<inputs.SignOnPolicyActionConditions>;
    /**
     * A boolean that if set to true and if the user's account is locked (the account.canAuthenticate attribute is set to
     * false), then social sign on with an external identity provider is prevented. Defaults to `false`.
     */
    enforceLockoutForIdentityProviders?: pulumi.Input<boolean>;
    /**
     * The ID of the environment to create the sign on policy action in.
     */
    environmentId?: pulumi.Input<string>;
    /**
     * Options specific to the **Identifier First** policy action.
     */
    identifierFirst?: pulumi.Input<inputs.SignOnPolicyActionIdentifierFirst>;
    /**
     * Options specific to the **Identity Provider** policy action.
     */
    identityProvider?: pulumi.Input<inputs.SignOnPolicyActionIdentityProvider>;
    /**
     * Options specific to the **Login** policy action.
     */
    login?: pulumi.Input<inputs.SignOnPolicyActionLogin>;
    /**
     * Options specific to the **Multi-factor Authentication** policy action.
     */
    mfa?: pulumi.Input<inputs.SignOnPolicyActionMfa>;
    /**
     * Options specific to the **PingID** policy action. This action can only be applied to Workforce solution context
     * environments that have the PingID and SSO services enabled.
     */
    pingid?: pulumi.Input<inputs.SignOnPolicyActionPingid>;
    /**
     * Options specific to the **PingID Windows Login Passwordless** policy action. This action can only be applied to
     * Workforce solution context environments that have the PingID and SSO services enabled.
     */
    pingidWindowsLoginPasswordless?: pulumi.Input<inputs.SignOnPolicyActionPingidWindowsLoginPasswordless>;
    /**
     * An integer that specifies the order in which the policy referenced by this assignment is evaluated during an
     * authentication flow relative to other policies. An assignment with a lower priority will be evaluated first.
     */
    priority?: pulumi.Input<number>;
    /**
     * Options specific to the **Progressive Profiling** policy action.
     */
    progressiveProfiling?: pulumi.Input<inputs.SignOnPolicyActionProgressiveProfiling>;
    /**
     * A boolean that specifies whether users must confirm data returned from an identity provider prior to registration. Users
     * can modify the data and omit non-required attributes. Modified attributes are added to the user's profile during account
     * creation. Defaults to `false`.
     */
    registrationConfirmUserAttributes?: pulumi.Input<boolean>;
    /**
     * A string that specifies the link to the external identity provider's identity store. This property is set when the
     * administrator chooses to have users register in an external identity store. This attribute can be set only when the
     * registration.enabled property is set to false.
     */
    registrationExternalHref?: pulumi.Input<string>;
    /**
     * A string that specifies the population ID associated with the newly registered user. Setting this enables local
     * registration features.
     */
    registrationLocalPopulationId?: pulumi.Input<string>;
    /**
     * The ID of the sign on policy to associate the sign on policy action to.
     */
    signOnPolicyId?: pulumi.Input<string>;
    /**
     * One or more IDs of the identity providers that can be used for the social login sign-on flow.
     */
    socialProviderIds?: pulumi.Input<pulumi.Input<string>[]>;
}

/**
 * The set of arguments for constructing a SignOnPolicyAction resource.
 */
export interface SignOnPolicyActionArgs {
    /**
     * Options specific to the **Agreements** policy action.
     */
    agreement?: pulumi.Input<inputs.SignOnPolicyActionAgreement>;
    /**
     * Conditions to apply to the sign on policy action. Applies to policy actions of type `agreement`, `identifier_first`,
     * `identity_provider`, `login`, `mfa`, `progressive_profiling`.
     */
    conditions?: pulumi.Input<inputs.SignOnPolicyActionConditions>;
    /**
     * A boolean that if set to true and if the user's account is locked (the account.canAuthenticate attribute is set to
     * false), then social sign on with an external identity provider is prevented. Defaults to `false`.
     */
    enforceLockoutForIdentityProviders?: pulumi.Input<boolean>;
    /**
     * The ID of the environment to create the sign on policy action in.
     */
    environmentId: pulumi.Input<string>;
    /**
     * Options specific to the **Identifier First** policy action.
     */
    identifierFirst?: pulumi.Input<inputs.SignOnPolicyActionIdentifierFirst>;
    /**
     * Options specific to the **Identity Provider** policy action.
     */
    identityProvider?: pulumi.Input<inputs.SignOnPolicyActionIdentityProvider>;
    /**
     * Options specific to the **Login** policy action.
     */
    login?: pulumi.Input<inputs.SignOnPolicyActionLogin>;
    /**
     * Options specific to the **Multi-factor Authentication** policy action.
     */
    mfa?: pulumi.Input<inputs.SignOnPolicyActionMfa>;
    /**
     * Options specific to the **PingID** policy action. This action can only be applied to Workforce solution context
     * environments that have the PingID and SSO services enabled.
     */
    pingid?: pulumi.Input<inputs.SignOnPolicyActionPingid>;
    /**
     * Options specific to the **PingID Windows Login Passwordless** policy action. This action can only be applied to
     * Workforce solution context environments that have the PingID and SSO services enabled.
     */
    pingidWindowsLoginPasswordless?: pulumi.Input<inputs.SignOnPolicyActionPingidWindowsLoginPasswordless>;
    /**
     * An integer that specifies the order in which the policy referenced by this assignment is evaluated during an
     * authentication flow relative to other policies. An assignment with a lower priority will be evaluated first.
     */
    priority: pulumi.Input<number>;
    /**
     * Options specific to the **Progressive Profiling** policy action.
     */
    progressiveProfiling?: pulumi.Input<inputs.SignOnPolicyActionProgressiveProfiling>;
    /**
     * A boolean that specifies whether users must confirm data returned from an identity provider prior to registration. Users
     * can modify the data and omit non-required attributes. Modified attributes are added to the user's profile during account
     * creation. Defaults to `false`.
     */
    registrationConfirmUserAttributes?: pulumi.Input<boolean>;
    /**
     * A string that specifies the link to the external identity provider's identity store. This property is set when the
     * administrator chooses to have users register in an external identity store. This attribute can be set only when the
     * registration.enabled property is set to false.
     */
    registrationExternalHref?: pulumi.Input<string>;
    /**
     * A string that specifies the population ID associated with the newly registered user. Setting this enables local
     * registration features.
     */
    registrationLocalPopulationId?: pulumi.Input<string>;
    /**
     * The ID of the sign on policy to associate the sign on policy action to.
     */
    signOnPolicyId: pulumi.Input<string>;
    /**
     * One or more IDs of the identity providers that can be used for the social login sign-on flow.
     */
    socialProviderIds?: pulumi.Input<pulumi.Input<string>[]>;
}
