// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export class MfaApplicationPushCredential extends pulumi.CustomResource {
    /**
     * Get an existing MfaApplicationPushCredential resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: MfaApplicationPushCredentialState, opts?: pulumi.CustomResourceOptions): MfaApplicationPushCredential {
        return new MfaApplicationPushCredential(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'pingone:index/mfaApplicationPushCredential:MfaApplicationPushCredential';

    /**
     * Returns true if the given object is an instance of MfaApplicationPushCredential.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is MfaApplicationPushCredential {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === MfaApplicationPushCredential.__pulumiType;
    }

    /**
     * A single object that specifies the credential settings for the Apple Push Notification Service. If this object is added
     * or removed, a replacement plan is triggered. Parameters within the object are subject to their own immutability rules.
     */
    public readonly apns!: pulumi.Output<outputs.MfaApplicationPushCredentialApns | undefined>;
    /**
     * The ID of the application to create the push notification credential for. Must be a valid PingOne resource ID. This
     * field is immutable and will trigger a replace plan if changed.
     */
    public readonly applicationId!: pulumi.Output<string>;
    /**
     * The ID of the environment to create the application push notification credential in. Must be a valid PingOne resource
     * ID. This field is immutable and will trigger a replace plan if changed.
     */
    public readonly environmentId!: pulumi.Output<string>;
    /**
     * A single object that specifies the credential settings for the Firebase Cloud Messaging service. If this object is added
     * or removed, a replacement plan is triggered. Parameters within the object are subject to their own immutability rules.
     */
    public readonly fcm!: pulumi.Output<outputs.MfaApplicationPushCredentialFcm | undefined>;
    /**
     * A single object that specifies the credential settings for Huawei Moble Service push messaging. If this object is added
     * or removed, a replacement plan is triggered. Parameters within the object are subject to their own immutability rules.
     */
    public readonly hms!: pulumi.Output<outputs.MfaApplicationPushCredentialHms | undefined>;

    /**
     * Create a MfaApplicationPushCredential resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: MfaApplicationPushCredentialArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: MfaApplicationPushCredentialArgs | MfaApplicationPushCredentialState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as MfaApplicationPushCredentialState | undefined;
            resourceInputs["apns"] = state ? state.apns : undefined;
            resourceInputs["applicationId"] = state ? state.applicationId : undefined;
            resourceInputs["environmentId"] = state ? state.environmentId : undefined;
            resourceInputs["fcm"] = state ? state.fcm : undefined;
            resourceInputs["hms"] = state ? state.hms : undefined;
        } else {
            const args = argsOrState as MfaApplicationPushCredentialArgs | undefined;
            if ((!args || args.applicationId === undefined) && !opts.urn) {
                throw new Error("Missing required property 'applicationId'");
            }
            if ((!args || args.environmentId === undefined) && !opts.urn) {
                throw new Error("Missing required property 'environmentId'");
            }
            resourceInputs["apns"] = args ? args.apns : undefined;
            resourceInputs["applicationId"] = args ? args.applicationId : undefined;
            resourceInputs["environmentId"] = args ? args.environmentId : undefined;
            resourceInputs["fcm"] = args ? args.fcm : undefined;
            resourceInputs["hms"] = args ? args.hms : undefined;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(MfaApplicationPushCredential.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering MfaApplicationPushCredential resources.
 */
export interface MfaApplicationPushCredentialState {
    /**
     * A single object that specifies the credential settings for the Apple Push Notification Service. If this object is added
     * or removed, a replacement plan is triggered. Parameters within the object are subject to their own immutability rules.
     */
    apns?: pulumi.Input<inputs.MfaApplicationPushCredentialApns>;
    /**
     * The ID of the application to create the push notification credential for. Must be a valid PingOne resource ID. This
     * field is immutable and will trigger a replace plan if changed.
     */
    applicationId?: pulumi.Input<string>;
    /**
     * The ID of the environment to create the application push notification credential in. Must be a valid PingOne resource
     * ID. This field is immutable and will trigger a replace plan if changed.
     */
    environmentId?: pulumi.Input<string>;
    /**
     * A single object that specifies the credential settings for the Firebase Cloud Messaging service. If this object is added
     * or removed, a replacement plan is triggered. Parameters within the object are subject to their own immutability rules.
     */
    fcm?: pulumi.Input<inputs.MfaApplicationPushCredentialFcm>;
    /**
     * A single object that specifies the credential settings for Huawei Moble Service push messaging. If this object is added
     * or removed, a replacement plan is triggered. Parameters within the object are subject to their own immutability rules.
     */
    hms?: pulumi.Input<inputs.MfaApplicationPushCredentialHms>;
}

/**
 * The set of arguments for constructing a MfaApplicationPushCredential resource.
 */
export interface MfaApplicationPushCredentialArgs {
    /**
     * A single object that specifies the credential settings for the Apple Push Notification Service. If this object is added
     * or removed, a replacement plan is triggered. Parameters within the object are subject to their own immutability rules.
     */
    apns?: pulumi.Input<inputs.MfaApplicationPushCredentialApns>;
    /**
     * The ID of the application to create the push notification credential for. Must be a valid PingOne resource ID. This
     * field is immutable and will trigger a replace plan if changed.
     */
    applicationId: pulumi.Input<string>;
    /**
     * The ID of the environment to create the application push notification credential in. Must be a valid PingOne resource
     * ID. This field is immutable and will trigger a replace plan if changed.
     */
    environmentId: pulumi.Input<string>;
    /**
     * A single object that specifies the credential settings for the Firebase Cloud Messaging service. If this object is added
     * or removed, a replacement plan is triggered. Parameters within the object are subject to their own immutability rules.
     */
    fcm?: pulumi.Input<inputs.MfaApplicationPushCredentialFcm>;
    /**
     * A single object that specifies the credential settings for Huawei Moble Service push messaging. If this object is added
     * or removed, a replacement plan is triggered. Parameters within the object are subject to their own immutability rules.
     */
    hms?: pulumi.Input<inputs.MfaApplicationPushCredentialHms>;
}
