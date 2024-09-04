// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export class KmsKey extends pulumi.CustomResource {
    /**
     * Get an existing KmsKey resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: KmsKeyState, opts?: pulumi.CustomResourceOptions): KmsKey {
        return new KmsKey(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'oci:index/kmsKey:KmsKey';

    /**
     * Returns true if the given object is an instance of KmsKey.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is KmsKey {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === KmsKey.__pulumiType;
    }

    public readonly autoKeyRotationDetails!: pulumi.Output<outputs.KmsKeyAutoKeyRotationDetails | undefined>;
    public readonly compartmentId!: pulumi.Output<string>;
    public /*out*/ readonly currentKeyVersion!: pulumi.Output<string>;
    public readonly definedTags!: pulumi.Output<{[key: string]: string}>;
    public readonly desiredState!: pulumi.Output<string>;
    public readonly displayName!: pulumi.Output<string>;
    public readonly externalKeyReference!: pulumi.Output<outputs.KmsKeyExternalKeyReference | undefined>;
    public /*out*/ readonly externalKeyReferenceDetails!: pulumi.Output<outputs.KmsKeyExternalKeyReferenceDetail[]>;
    public readonly freeformTags!: pulumi.Output<{[key: string]: string}>;
    public readonly isAutoRotationEnabled!: pulumi.Output<boolean>;
    public /*out*/ readonly isPrimary!: pulumi.Output<boolean>;
    public readonly keyShape!: pulumi.Output<outputs.KmsKeyKeyShape>;
    public readonly managementEndpoint!: pulumi.Output<string>;
    public readonly protectionMode!: pulumi.Output<string>;
    public /*out*/ readonly replicaDetails!: pulumi.Output<outputs.KmsKeyReplicaDetail[]>;
    public readonly restoreFromFile!: pulumi.Output<outputs.KmsKeyRestoreFromFile | undefined>;
    public readonly restoreFromObjectStore!: pulumi.Output<outputs.KmsKeyRestoreFromObjectStore | undefined>;
    public readonly restoreTrigger!: pulumi.Output<boolean | undefined>;
    public /*out*/ readonly restoredFromKeyId!: pulumi.Output<string>;
    public /*out*/ readonly state!: pulumi.Output<string>;
    public /*out*/ readonly timeCreated!: pulumi.Output<string>;
    public readonly timeOfDeletion!: pulumi.Output<string>;
    public readonly timeouts!: pulumi.Output<outputs.KmsKeyTimeouts | undefined>;
    public /*out*/ readonly vaultId!: pulumi.Output<string>;

    /**
     * Create a KmsKey resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: KmsKeyArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: KmsKeyArgs | KmsKeyState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as KmsKeyState | undefined;
            resourceInputs["autoKeyRotationDetails"] = state ? state.autoKeyRotationDetails : undefined;
            resourceInputs["compartmentId"] = state ? state.compartmentId : undefined;
            resourceInputs["currentKeyVersion"] = state ? state.currentKeyVersion : undefined;
            resourceInputs["definedTags"] = state ? state.definedTags : undefined;
            resourceInputs["desiredState"] = state ? state.desiredState : undefined;
            resourceInputs["displayName"] = state ? state.displayName : undefined;
            resourceInputs["externalKeyReference"] = state ? state.externalKeyReference : undefined;
            resourceInputs["externalKeyReferenceDetails"] = state ? state.externalKeyReferenceDetails : undefined;
            resourceInputs["freeformTags"] = state ? state.freeformTags : undefined;
            resourceInputs["isAutoRotationEnabled"] = state ? state.isAutoRotationEnabled : undefined;
            resourceInputs["isPrimary"] = state ? state.isPrimary : undefined;
            resourceInputs["keyShape"] = state ? state.keyShape : undefined;
            resourceInputs["managementEndpoint"] = state ? state.managementEndpoint : undefined;
            resourceInputs["protectionMode"] = state ? state.protectionMode : undefined;
            resourceInputs["replicaDetails"] = state ? state.replicaDetails : undefined;
            resourceInputs["restoreFromFile"] = state ? state.restoreFromFile : undefined;
            resourceInputs["restoreFromObjectStore"] = state ? state.restoreFromObjectStore : undefined;
            resourceInputs["restoreTrigger"] = state ? state.restoreTrigger : undefined;
            resourceInputs["restoredFromKeyId"] = state ? state.restoredFromKeyId : undefined;
            resourceInputs["state"] = state ? state.state : undefined;
            resourceInputs["timeCreated"] = state ? state.timeCreated : undefined;
            resourceInputs["timeOfDeletion"] = state ? state.timeOfDeletion : undefined;
            resourceInputs["timeouts"] = state ? state.timeouts : undefined;
            resourceInputs["vaultId"] = state ? state.vaultId : undefined;
        } else {
            const args = argsOrState as KmsKeyArgs | undefined;
            if ((!args || args.compartmentId === undefined) && !opts.urn) {
                throw new Error("Missing required property 'compartmentId'");
            }
            if ((!args || args.displayName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'displayName'");
            }
            if ((!args || args.keyShape === undefined) && !opts.urn) {
                throw new Error("Missing required property 'keyShape'");
            }
            if ((!args || args.managementEndpoint === undefined) && !opts.urn) {
                throw new Error("Missing required property 'managementEndpoint'");
            }
            resourceInputs["autoKeyRotationDetails"] = args ? args.autoKeyRotationDetails : undefined;
            resourceInputs["compartmentId"] = args ? args.compartmentId : undefined;
            resourceInputs["definedTags"] = args ? args.definedTags : undefined;
            resourceInputs["desiredState"] = args ? args.desiredState : undefined;
            resourceInputs["displayName"] = args ? args.displayName : undefined;
            resourceInputs["externalKeyReference"] = args ? args.externalKeyReference : undefined;
            resourceInputs["freeformTags"] = args ? args.freeformTags : undefined;
            resourceInputs["isAutoRotationEnabled"] = args ? args.isAutoRotationEnabled : undefined;
            resourceInputs["keyShape"] = args ? args.keyShape : undefined;
            resourceInputs["managementEndpoint"] = args ? args.managementEndpoint : undefined;
            resourceInputs["protectionMode"] = args ? args.protectionMode : undefined;
            resourceInputs["restoreFromFile"] = args ? args.restoreFromFile : undefined;
            resourceInputs["restoreFromObjectStore"] = args ? args.restoreFromObjectStore : undefined;
            resourceInputs["restoreTrigger"] = args ? args.restoreTrigger : undefined;
            resourceInputs["timeOfDeletion"] = args ? args.timeOfDeletion : undefined;
            resourceInputs["timeouts"] = args ? args.timeouts : undefined;
            resourceInputs["currentKeyVersion"] = undefined /*out*/;
            resourceInputs["externalKeyReferenceDetails"] = undefined /*out*/;
            resourceInputs["isPrimary"] = undefined /*out*/;
            resourceInputs["replicaDetails"] = undefined /*out*/;
            resourceInputs["restoredFromKeyId"] = undefined /*out*/;
            resourceInputs["state"] = undefined /*out*/;
            resourceInputs["timeCreated"] = undefined /*out*/;
            resourceInputs["vaultId"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(KmsKey.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering KmsKey resources.
 */
export interface KmsKeyState {
    autoKeyRotationDetails?: pulumi.Input<inputs.KmsKeyAutoKeyRotationDetails>;
    compartmentId?: pulumi.Input<string>;
    currentKeyVersion?: pulumi.Input<string>;
    definedTags?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    desiredState?: pulumi.Input<string>;
    displayName?: pulumi.Input<string>;
    externalKeyReference?: pulumi.Input<inputs.KmsKeyExternalKeyReference>;
    externalKeyReferenceDetails?: pulumi.Input<pulumi.Input<inputs.KmsKeyExternalKeyReferenceDetail>[]>;
    freeformTags?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    isAutoRotationEnabled?: pulumi.Input<boolean>;
    isPrimary?: pulumi.Input<boolean>;
    keyShape?: pulumi.Input<inputs.KmsKeyKeyShape>;
    managementEndpoint?: pulumi.Input<string>;
    protectionMode?: pulumi.Input<string>;
    replicaDetails?: pulumi.Input<pulumi.Input<inputs.KmsKeyReplicaDetail>[]>;
    restoreFromFile?: pulumi.Input<inputs.KmsKeyRestoreFromFile>;
    restoreFromObjectStore?: pulumi.Input<inputs.KmsKeyRestoreFromObjectStore>;
    restoreTrigger?: pulumi.Input<boolean>;
    restoredFromKeyId?: pulumi.Input<string>;
    state?: pulumi.Input<string>;
    timeCreated?: pulumi.Input<string>;
    timeOfDeletion?: pulumi.Input<string>;
    timeouts?: pulumi.Input<inputs.KmsKeyTimeouts>;
    vaultId?: pulumi.Input<string>;
}

/**
 * The set of arguments for constructing a KmsKey resource.
 */
export interface KmsKeyArgs {
    autoKeyRotationDetails?: pulumi.Input<inputs.KmsKeyAutoKeyRotationDetails>;
    compartmentId: pulumi.Input<string>;
    definedTags?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    desiredState?: pulumi.Input<string>;
    displayName: pulumi.Input<string>;
    externalKeyReference?: pulumi.Input<inputs.KmsKeyExternalKeyReference>;
    freeformTags?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    isAutoRotationEnabled?: pulumi.Input<boolean>;
    keyShape: pulumi.Input<inputs.KmsKeyKeyShape>;
    managementEndpoint: pulumi.Input<string>;
    protectionMode?: pulumi.Input<string>;
    restoreFromFile?: pulumi.Input<inputs.KmsKeyRestoreFromFile>;
    restoreFromObjectStore?: pulumi.Input<inputs.KmsKeyRestoreFromObjectStore>;
    restoreTrigger?: pulumi.Input<boolean>;
    timeOfDeletion?: pulumi.Input<string>;
    timeouts?: pulumi.Input<inputs.KmsKeyTimeouts>;
}
