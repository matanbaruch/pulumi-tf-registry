// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export class KmsOverwriteWhiteBoxDeviceFingerprints extends pulumi.CustomResource {
    /**
     * Get an existing KmsOverwriteWhiteBoxDeviceFingerprints resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: KmsOverwriteWhiteBoxDeviceFingerprintsState, opts?: pulumi.CustomResourceOptions): KmsOverwriteWhiteBoxDeviceFingerprints {
        return new KmsOverwriteWhiteBoxDeviceFingerprints(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'tencentcloud:index/kmsOverwriteWhiteBoxDeviceFingerprints:KmsOverwriteWhiteBoxDeviceFingerprints';

    /**
     * Returns true if the given object is an instance of KmsOverwriteWhiteBoxDeviceFingerprints.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is KmsOverwriteWhiteBoxDeviceFingerprints {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === KmsOverwriteWhiteBoxDeviceFingerprints.__pulumiType;
    }

    /**
     * Device fingerprint list.
     */
    public readonly deviceFingerprints!: pulumi.Output<outputs.KmsOverwriteWhiteBoxDeviceFingerprintsDeviceFingerprint[] | undefined>;
    /**
     * CMK unique identifier.
     */
    public readonly keyId!: pulumi.Output<string>;

    /**
     * Create a KmsOverwriteWhiteBoxDeviceFingerprints resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: KmsOverwriteWhiteBoxDeviceFingerprintsArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: KmsOverwriteWhiteBoxDeviceFingerprintsArgs | KmsOverwriteWhiteBoxDeviceFingerprintsState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as KmsOverwriteWhiteBoxDeviceFingerprintsState | undefined;
            resourceInputs["deviceFingerprints"] = state ? state.deviceFingerprints : undefined;
            resourceInputs["keyId"] = state ? state.keyId : undefined;
        } else {
            const args = argsOrState as KmsOverwriteWhiteBoxDeviceFingerprintsArgs | undefined;
            if ((!args || args.keyId === undefined) && !opts.urn) {
                throw new Error("Missing required property 'keyId'");
            }
            resourceInputs["deviceFingerprints"] = args ? args.deviceFingerprints : undefined;
            resourceInputs["keyId"] = args ? args.keyId : undefined;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(KmsOverwriteWhiteBoxDeviceFingerprints.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering KmsOverwriteWhiteBoxDeviceFingerprints resources.
 */
export interface KmsOverwriteWhiteBoxDeviceFingerprintsState {
    /**
     * Device fingerprint list.
     */
    deviceFingerprints?: pulumi.Input<pulumi.Input<inputs.KmsOverwriteWhiteBoxDeviceFingerprintsDeviceFingerprint>[]>;
    /**
     * CMK unique identifier.
     */
    keyId?: pulumi.Input<string>;
}

/**
 * The set of arguments for constructing a KmsOverwriteWhiteBoxDeviceFingerprints resource.
 */
export interface KmsOverwriteWhiteBoxDeviceFingerprintsArgs {
    /**
     * Device fingerprint list.
     */
    deviceFingerprints?: pulumi.Input<pulumi.Input<inputs.KmsOverwriteWhiteBoxDeviceFingerprintsDeviceFingerprint>[]>;
    /**
     * CMK unique identifier.
     */
    keyId: pulumi.Input<string>;
}
