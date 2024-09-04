// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export class MfaPolicy extends pulumi.CustomResource {
    /**
     * Get an existing MfaPolicy resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: MfaPolicyState, opts?: pulumi.CustomResourceOptions): MfaPolicy {
        return new MfaPolicy(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'pingone:index/mfaPolicy:MfaPolicy';

    /**
     * Returns true if the given object is an instance of MfaPolicy.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is MfaPolicy {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === MfaPolicy.__pulumiType;
    }

    /**
     * A string that defines the device selection method. Options are `DEFAULT_TO_FIRST` (this is the default setting for new
     * environments), `PROMPT_TO_SELECT` and `ALWAYS_DISPLAY_DEVICES`. Defaults to `DEFAULT_TO_FIRST`.
     */
    public readonly deviceSelection!: pulumi.Output<string | undefined>;
    /**
     * Email OTP authentication policy settings.
     */
    public readonly email!: pulumi.Output<outputs.MfaPolicyEmail>;
    /**
     * The ID of the environment to create the MFA device policy in.
     */
    public readonly environmentId!: pulumi.Output<string>;
    /**
     * FIDO2 device authentication policy settings.
     */
    public readonly fido2!: pulumi.Output<outputs.MfaPolicyFido2 | undefined>;
    /**
     * Mobile authenticator device policy settings. This factor requires embedding the PingOne MFA SDK into a customer facing
     * mobile application, and configuring as a Native application using the `pingone.Application` resource.
     */
    public readonly mobile!: pulumi.Output<outputs.MfaPolicyMobile>;
    /**
     * A string that specifies the MFA policy's name.
     */
    public readonly name!: pulumi.Output<string>;
    /**
     * A string that defines whether a user should be notified if a new authentication method has been added to their account.
     * Options are `NONE` (the default), `EMAIL_THEN_SMS` and `SMS_THEN_EMAIL`. Defaults to `NONE`.
     */
    public readonly newDeviceNotification!: pulumi.Output<string | undefined>;
    /**
     * **Deprecation Notice** The `platform` FIDO device type is deprecated and needs to be replaced with the `fido2` device
     * type. `platform` will not be configurable for newly created environments, or existing environments that have not had
     * their environment upgraded to use the latest FIDO2 policies. Platform biometrics authentication policy settings.
     *
     * @deprecated Deprecated
     */
    public readonly platform!: pulumi.Output<outputs.MfaPolicyPlatform | undefined>;
    /**
     * **Deprecation Notice** The `security_key` FIDO device type is deprecated and needs to be replaced with the `fido2`
     * device type. `security_key` will not be configurable for newly created environments, or existing environments that have
     * not had their environment upgraded to use the latest FIDO2 policies. Security key (FIDO2) authentication policy
     * settings.
     *
     * @deprecated Deprecated
     */
    public readonly securityKey!: pulumi.Output<outputs.MfaPolicySecurityKey | undefined>;
    /**
     * SMS OTP authentication policy settings.
     */
    public readonly sms!: pulumi.Output<outputs.MfaPolicySms>;
    /**
     * TOTP authenticator policy settings.
     */
    public readonly totp!: pulumi.Output<outputs.MfaPolicyTotp>;
    /**
     * Voice OTP authentication policy settings.
     */
    public readonly voice!: pulumi.Output<outputs.MfaPolicyVoice>;

    /**
     * Create a MfaPolicy resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: MfaPolicyArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: MfaPolicyArgs | MfaPolicyState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as MfaPolicyState | undefined;
            resourceInputs["deviceSelection"] = state ? state.deviceSelection : undefined;
            resourceInputs["email"] = state ? state.email : undefined;
            resourceInputs["environmentId"] = state ? state.environmentId : undefined;
            resourceInputs["fido2"] = state ? state.fido2 : undefined;
            resourceInputs["mobile"] = state ? state.mobile : undefined;
            resourceInputs["name"] = state ? state.name : undefined;
            resourceInputs["newDeviceNotification"] = state ? state.newDeviceNotification : undefined;
            resourceInputs["platform"] = state ? state.platform : undefined;
            resourceInputs["securityKey"] = state ? state.securityKey : undefined;
            resourceInputs["sms"] = state ? state.sms : undefined;
            resourceInputs["totp"] = state ? state.totp : undefined;
            resourceInputs["voice"] = state ? state.voice : undefined;
        } else {
            const args = argsOrState as MfaPolicyArgs | undefined;
            if ((!args || args.email === undefined) && !opts.urn) {
                throw new Error("Missing required property 'email'");
            }
            if ((!args || args.environmentId === undefined) && !opts.urn) {
                throw new Error("Missing required property 'environmentId'");
            }
            if ((!args || args.mobile === undefined) && !opts.urn) {
                throw new Error("Missing required property 'mobile'");
            }
            if ((!args || args.sms === undefined) && !opts.urn) {
                throw new Error("Missing required property 'sms'");
            }
            if ((!args || args.totp === undefined) && !opts.urn) {
                throw new Error("Missing required property 'totp'");
            }
            if ((!args || args.voice === undefined) && !opts.urn) {
                throw new Error("Missing required property 'voice'");
            }
            resourceInputs["deviceSelection"] = args ? args.deviceSelection : undefined;
            resourceInputs["email"] = args ? args.email : undefined;
            resourceInputs["environmentId"] = args ? args.environmentId : undefined;
            resourceInputs["fido2"] = args ? args.fido2 : undefined;
            resourceInputs["mobile"] = args ? args.mobile : undefined;
            resourceInputs["name"] = args ? args.name : undefined;
            resourceInputs["newDeviceNotification"] = args ? args.newDeviceNotification : undefined;
            resourceInputs["platform"] = args ? args.platform : undefined;
            resourceInputs["securityKey"] = args ? args.securityKey : undefined;
            resourceInputs["sms"] = args ? args.sms : undefined;
            resourceInputs["totp"] = args ? args.totp : undefined;
            resourceInputs["voice"] = args ? args.voice : undefined;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(MfaPolicy.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering MfaPolicy resources.
 */
export interface MfaPolicyState {
    /**
     * A string that defines the device selection method. Options are `DEFAULT_TO_FIRST` (this is the default setting for new
     * environments), `PROMPT_TO_SELECT` and `ALWAYS_DISPLAY_DEVICES`. Defaults to `DEFAULT_TO_FIRST`.
     */
    deviceSelection?: pulumi.Input<string>;
    /**
     * Email OTP authentication policy settings.
     */
    email?: pulumi.Input<inputs.MfaPolicyEmail>;
    /**
     * The ID of the environment to create the MFA device policy in.
     */
    environmentId?: pulumi.Input<string>;
    /**
     * FIDO2 device authentication policy settings.
     */
    fido2?: pulumi.Input<inputs.MfaPolicyFido2>;
    /**
     * Mobile authenticator device policy settings. This factor requires embedding the PingOne MFA SDK into a customer facing
     * mobile application, and configuring as a Native application using the `pingone.Application` resource.
     */
    mobile?: pulumi.Input<inputs.MfaPolicyMobile>;
    /**
     * A string that specifies the MFA policy's name.
     */
    name?: pulumi.Input<string>;
    /**
     * A string that defines whether a user should be notified if a new authentication method has been added to their account.
     * Options are `NONE` (the default), `EMAIL_THEN_SMS` and `SMS_THEN_EMAIL`. Defaults to `NONE`.
     */
    newDeviceNotification?: pulumi.Input<string>;
    /**
     * **Deprecation Notice** The `platform` FIDO device type is deprecated and needs to be replaced with the `fido2` device
     * type. `platform` will not be configurable for newly created environments, or existing environments that have not had
     * their environment upgraded to use the latest FIDO2 policies. Platform biometrics authentication policy settings.
     *
     * @deprecated Deprecated
     */
    platform?: pulumi.Input<inputs.MfaPolicyPlatform>;
    /**
     * **Deprecation Notice** The `security_key` FIDO device type is deprecated and needs to be replaced with the `fido2`
     * device type. `security_key` will not be configurable for newly created environments, or existing environments that have
     * not had their environment upgraded to use the latest FIDO2 policies. Security key (FIDO2) authentication policy
     * settings.
     *
     * @deprecated Deprecated
     */
    securityKey?: pulumi.Input<inputs.MfaPolicySecurityKey>;
    /**
     * SMS OTP authentication policy settings.
     */
    sms?: pulumi.Input<inputs.MfaPolicySms>;
    /**
     * TOTP authenticator policy settings.
     */
    totp?: pulumi.Input<inputs.MfaPolicyTotp>;
    /**
     * Voice OTP authentication policy settings.
     */
    voice?: pulumi.Input<inputs.MfaPolicyVoice>;
}

/**
 * The set of arguments for constructing a MfaPolicy resource.
 */
export interface MfaPolicyArgs {
    /**
     * A string that defines the device selection method. Options are `DEFAULT_TO_FIRST` (this is the default setting for new
     * environments), `PROMPT_TO_SELECT` and `ALWAYS_DISPLAY_DEVICES`. Defaults to `DEFAULT_TO_FIRST`.
     */
    deviceSelection?: pulumi.Input<string>;
    /**
     * Email OTP authentication policy settings.
     */
    email: pulumi.Input<inputs.MfaPolicyEmail>;
    /**
     * The ID of the environment to create the MFA device policy in.
     */
    environmentId: pulumi.Input<string>;
    /**
     * FIDO2 device authentication policy settings.
     */
    fido2?: pulumi.Input<inputs.MfaPolicyFido2>;
    /**
     * Mobile authenticator device policy settings. This factor requires embedding the PingOne MFA SDK into a customer facing
     * mobile application, and configuring as a Native application using the `pingone.Application` resource.
     */
    mobile: pulumi.Input<inputs.MfaPolicyMobile>;
    /**
     * A string that specifies the MFA policy's name.
     */
    name?: pulumi.Input<string>;
    /**
     * A string that defines whether a user should be notified if a new authentication method has been added to their account.
     * Options are `NONE` (the default), `EMAIL_THEN_SMS` and `SMS_THEN_EMAIL`. Defaults to `NONE`.
     */
    newDeviceNotification?: pulumi.Input<string>;
    /**
     * **Deprecation Notice** The `platform` FIDO device type is deprecated and needs to be replaced with the `fido2` device
     * type. `platform` will not be configurable for newly created environments, or existing environments that have not had
     * their environment upgraded to use the latest FIDO2 policies. Platform biometrics authentication policy settings.
     *
     * @deprecated Deprecated
     */
    platform?: pulumi.Input<inputs.MfaPolicyPlatform>;
    /**
     * **Deprecation Notice** The `security_key` FIDO device type is deprecated and needs to be replaced with the `fido2`
     * device type. `security_key` will not be configurable for newly created environments, or existing environments that have
     * not had their environment upgraded to use the latest FIDO2 policies. Security key (FIDO2) authentication policy
     * settings.
     *
     * @deprecated Deprecated
     */
    securityKey?: pulumi.Input<inputs.MfaPolicySecurityKey>;
    /**
     * SMS OTP authentication policy settings.
     */
    sms: pulumi.Input<inputs.MfaPolicySms>;
    /**
     * TOTP authenticator policy settings.
     */
    totp: pulumi.Input<inputs.MfaPolicyTotp>;
    /**
     * Voice OTP authentication policy settings.
     */
    voice: pulumi.Input<inputs.MfaPolicyVoice>;
}
