// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export class GoldenGateDeploymentBackup extends pulumi.CustomResource {
    /**
     * Get an existing GoldenGateDeploymentBackup resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: GoldenGateDeploymentBackupState, opts?: pulumi.CustomResourceOptions): GoldenGateDeploymentBackup {
        return new GoldenGateDeploymentBackup(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'oci:index/goldenGateDeploymentBackup:GoldenGateDeploymentBackup';

    /**
     * Returns true if the given object is an instance of GoldenGateDeploymentBackup.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is GoldenGateDeploymentBackup {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === GoldenGateDeploymentBackup.__pulumiType;
    }

    public /*out*/ readonly backupType!: pulumi.Output<string>;
    public readonly bucket!: pulumi.Output<string>;
    public readonly compartmentId!: pulumi.Output<string>;
    public readonly definedTags!: pulumi.Output<{[key: string]: string}>;
    public readonly deploymentId!: pulumi.Output<string>;
    public /*out*/ readonly deploymentType!: pulumi.Output<string>;
    public readonly displayName!: pulumi.Output<string>;
    public readonly freeformTags!: pulumi.Output<{[key: string]: string}>;
    public /*out*/ readonly isAutomatic!: pulumi.Output<boolean>;
    public readonly isLockOverride!: pulumi.Output<boolean>;
    public /*out*/ readonly lifecycleDetails!: pulumi.Output<string>;
    public readonly locks!: pulumi.Output<outputs.GoldenGateDeploymentBackupLock[] | undefined>;
    public readonly namespace!: pulumi.Output<string>;
    public readonly object!: pulumi.Output<string>;
    public /*out*/ readonly oggVersion!: pulumi.Output<string>;
    public /*out*/ readonly sizeInBytes!: pulumi.Output<number>;
    public /*out*/ readonly state!: pulumi.Output<string>;
    public /*out*/ readonly systemTags!: pulumi.Output<{[key: string]: string}>;
    public /*out*/ readonly timeBackupFinished!: pulumi.Output<string>;
    public /*out*/ readonly timeCreated!: pulumi.Output<string>;
    public /*out*/ readonly timeOfBackup!: pulumi.Output<string>;
    public /*out*/ readonly timeUpdated!: pulumi.Output<string>;
    public readonly timeouts!: pulumi.Output<outputs.GoldenGateDeploymentBackupTimeouts | undefined>;

    /**
     * Create a GoldenGateDeploymentBackup resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: GoldenGateDeploymentBackupArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: GoldenGateDeploymentBackupArgs | GoldenGateDeploymentBackupState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as GoldenGateDeploymentBackupState | undefined;
            resourceInputs["backupType"] = state ? state.backupType : undefined;
            resourceInputs["bucket"] = state ? state.bucket : undefined;
            resourceInputs["compartmentId"] = state ? state.compartmentId : undefined;
            resourceInputs["definedTags"] = state ? state.definedTags : undefined;
            resourceInputs["deploymentId"] = state ? state.deploymentId : undefined;
            resourceInputs["deploymentType"] = state ? state.deploymentType : undefined;
            resourceInputs["displayName"] = state ? state.displayName : undefined;
            resourceInputs["freeformTags"] = state ? state.freeformTags : undefined;
            resourceInputs["isAutomatic"] = state ? state.isAutomatic : undefined;
            resourceInputs["isLockOverride"] = state ? state.isLockOverride : undefined;
            resourceInputs["lifecycleDetails"] = state ? state.lifecycleDetails : undefined;
            resourceInputs["locks"] = state ? state.locks : undefined;
            resourceInputs["namespace"] = state ? state.namespace : undefined;
            resourceInputs["object"] = state ? state.object : undefined;
            resourceInputs["oggVersion"] = state ? state.oggVersion : undefined;
            resourceInputs["sizeInBytes"] = state ? state.sizeInBytes : undefined;
            resourceInputs["state"] = state ? state.state : undefined;
            resourceInputs["systemTags"] = state ? state.systemTags : undefined;
            resourceInputs["timeBackupFinished"] = state ? state.timeBackupFinished : undefined;
            resourceInputs["timeCreated"] = state ? state.timeCreated : undefined;
            resourceInputs["timeOfBackup"] = state ? state.timeOfBackup : undefined;
            resourceInputs["timeUpdated"] = state ? state.timeUpdated : undefined;
            resourceInputs["timeouts"] = state ? state.timeouts : undefined;
        } else {
            const args = argsOrState as GoldenGateDeploymentBackupArgs | undefined;
            if ((!args || args.bucket === undefined) && !opts.urn) {
                throw new Error("Missing required property 'bucket'");
            }
            if ((!args || args.compartmentId === undefined) && !opts.urn) {
                throw new Error("Missing required property 'compartmentId'");
            }
            if ((!args || args.deploymentId === undefined) && !opts.urn) {
                throw new Error("Missing required property 'deploymentId'");
            }
            if ((!args || args.displayName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'displayName'");
            }
            if ((!args || args.namespace === undefined) && !opts.urn) {
                throw new Error("Missing required property 'namespace'");
            }
            if ((!args || args.object === undefined) && !opts.urn) {
                throw new Error("Missing required property 'object'");
            }
            resourceInputs["bucket"] = args ? args.bucket : undefined;
            resourceInputs["compartmentId"] = args ? args.compartmentId : undefined;
            resourceInputs["definedTags"] = args ? args.definedTags : undefined;
            resourceInputs["deploymentId"] = args ? args.deploymentId : undefined;
            resourceInputs["displayName"] = args ? args.displayName : undefined;
            resourceInputs["freeformTags"] = args ? args.freeformTags : undefined;
            resourceInputs["isLockOverride"] = args ? args.isLockOverride : undefined;
            resourceInputs["locks"] = args ? args.locks : undefined;
            resourceInputs["namespace"] = args ? args.namespace : undefined;
            resourceInputs["object"] = args ? args.object : undefined;
            resourceInputs["timeouts"] = args ? args.timeouts : undefined;
            resourceInputs["backupType"] = undefined /*out*/;
            resourceInputs["deploymentType"] = undefined /*out*/;
            resourceInputs["isAutomatic"] = undefined /*out*/;
            resourceInputs["lifecycleDetails"] = undefined /*out*/;
            resourceInputs["oggVersion"] = undefined /*out*/;
            resourceInputs["sizeInBytes"] = undefined /*out*/;
            resourceInputs["state"] = undefined /*out*/;
            resourceInputs["systemTags"] = undefined /*out*/;
            resourceInputs["timeBackupFinished"] = undefined /*out*/;
            resourceInputs["timeCreated"] = undefined /*out*/;
            resourceInputs["timeOfBackup"] = undefined /*out*/;
            resourceInputs["timeUpdated"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(GoldenGateDeploymentBackup.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering GoldenGateDeploymentBackup resources.
 */
export interface GoldenGateDeploymentBackupState {
    backupType?: pulumi.Input<string>;
    bucket?: pulumi.Input<string>;
    compartmentId?: pulumi.Input<string>;
    definedTags?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    deploymentId?: pulumi.Input<string>;
    deploymentType?: pulumi.Input<string>;
    displayName?: pulumi.Input<string>;
    freeformTags?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    isAutomatic?: pulumi.Input<boolean>;
    isLockOverride?: pulumi.Input<boolean>;
    lifecycleDetails?: pulumi.Input<string>;
    locks?: pulumi.Input<pulumi.Input<inputs.GoldenGateDeploymentBackupLock>[]>;
    namespace?: pulumi.Input<string>;
    object?: pulumi.Input<string>;
    oggVersion?: pulumi.Input<string>;
    sizeInBytes?: pulumi.Input<number>;
    state?: pulumi.Input<string>;
    systemTags?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    timeBackupFinished?: pulumi.Input<string>;
    timeCreated?: pulumi.Input<string>;
    timeOfBackup?: pulumi.Input<string>;
    timeUpdated?: pulumi.Input<string>;
    timeouts?: pulumi.Input<inputs.GoldenGateDeploymentBackupTimeouts>;
}

/**
 * The set of arguments for constructing a GoldenGateDeploymentBackup resource.
 */
export interface GoldenGateDeploymentBackupArgs {
    bucket: pulumi.Input<string>;
    compartmentId: pulumi.Input<string>;
    definedTags?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    deploymentId: pulumi.Input<string>;
    displayName: pulumi.Input<string>;
    freeformTags?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    isLockOverride?: pulumi.Input<boolean>;
    locks?: pulumi.Input<pulumi.Input<inputs.GoldenGateDeploymentBackupLock>[]>;
    namespace: pulumi.Input<string>;
    object: pulumi.Input<string>;
    timeouts?: pulumi.Input<inputs.GoldenGateDeploymentBackupTimeouts>;
}
