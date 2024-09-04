// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export class DatabaseBackup extends pulumi.CustomResource {
    /**
     * Get an existing DatabaseBackup resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: DatabaseBackupState, opts?: pulumi.CustomResourceOptions): DatabaseBackup {
        return new DatabaseBackup(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'oci:index/databaseBackup:DatabaseBackup';

    /**
     * Returns true if the given object is an instance of DatabaseBackup.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is DatabaseBackup {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === DatabaseBackup.__pulumiType;
    }

    public /*out*/ readonly availabilityDomain!: pulumi.Output<string>;
    public /*out*/ readonly compartmentId!: pulumi.Output<string>;
    public /*out*/ readonly databaseEdition!: pulumi.Output<string>;
    public readonly databaseId!: pulumi.Output<string>;
    public /*out*/ readonly databaseSizeInGbs!: pulumi.Output<number>;
    public readonly displayName!: pulumi.Output<string>;
    public /*out*/ readonly keyStoreId!: pulumi.Output<string>;
    public /*out*/ readonly keyStoreWalletName!: pulumi.Output<string>;
    public /*out*/ readonly kmsKeyId!: pulumi.Output<string>;
    public /*out*/ readonly kmsKeyVersionId!: pulumi.Output<string>;
    public /*out*/ readonly lifecycleDetails!: pulumi.Output<string>;
    public /*out*/ readonly shape!: pulumi.Output<string>;
    public /*out*/ readonly state!: pulumi.Output<string>;
    public /*out*/ readonly timeEnded!: pulumi.Output<string>;
    public /*out*/ readonly timeStarted!: pulumi.Output<string>;
    public readonly timeouts!: pulumi.Output<outputs.DatabaseBackupTimeouts | undefined>;
    public /*out*/ readonly type!: pulumi.Output<string>;
    public /*out*/ readonly vaultId!: pulumi.Output<string>;
    public /*out*/ readonly version!: pulumi.Output<string>;

    /**
     * Create a DatabaseBackup resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: DatabaseBackupArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: DatabaseBackupArgs | DatabaseBackupState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as DatabaseBackupState | undefined;
            resourceInputs["availabilityDomain"] = state ? state.availabilityDomain : undefined;
            resourceInputs["compartmentId"] = state ? state.compartmentId : undefined;
            resourceInputs["databaseEdition"] = state ? state.databaseEdition : undefined;
            resourceInputs["databaseId"] = state ? state.databaseId : undefined;
            resourceInputs["databaseSizeInGbs"] = state ? state.databaseSizeInGbs : undefined;
            resourceInputs["displayName"] = state ? state.displayName : undefined;
            resourceInputs["keyStoreId"] = state ? state.keyStoreId : undefined;
            resourceInputs["keyStoreWalletName"] = state ? state.keyStoreWalletName : undefined;
            resourceInputs["kmsKeyId"] = state ? state.kmsKeyId : undefined;
            resourceInputs["kmsKeyVersionId"] = state ? state.kmsKeyVersionId : undefined;
            resourceInputs["lifecycleDetails"] = state ? state.lifecycleDetails : undefined;
            resourceInputs["shape"] = state ? state.shape : undefined;
            resourceInputs["state"] = state ? state.state : undefined;
            resourceInputs["timeEnded"] = state ? state.timeEnded : undefined;
            resourceInputs["timeStarted"] = state ? state.timeStarted : undefined;
            resourceInputs["timeouts"] = state ? state.timeouts : undefined;
            resourceInputs["type"] = state ? state.type : undefined;
            resourceInputs["vaultId"] = state ? state.vaultId : undefined;
            resourceInputs["version"] = state ? state.version : undefined;
        } else {
            const args = argsOrState as DatabaseBackupArgs | undefined;
            if ((!args || args.databaseId === undefined) && !opts.urn) {
                throw new Error("Missing required property 'databaseId'");
            }
            if ((!args || args.displayName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'displayName'");
            }
            resourceInputs["databaseId"] = args ? args.databaseId : undefined;
            resourceInputs["displayName"] = args ? args.displayName : undefined;
            resourceInputs["timeouts"] = args ? args.timeouts : undefined;
            resourceInputs["availabilityDomain"] = undefined /*out*/;
            resourceInputs["compartmentId"] = undefined /*out*/;
            resourceInputs["databaseEdition"] = undefined /*out*/;
            resourceInputs["databaseSizeInGbs"] = undefined /*out*/;
            resourceInputs["keyStoreId"] = undefined /*out*/;
            resourceInputs["keyStoreWalletName"] = undefined /*out*/;
            resourceInputs["kmsKeyId"] = undefined /*out*/;
            resourceInputs["kmsKeyVersionId"] = undefined /*out*/;
            resourceInputs["lifecycleDetails"] = undefined /*out*/;
            resourceInputs["shape"] = undefined /*out*/;
            resourceInputs["state"] = undefined /*out*/;
            resourceInputs["timeEnded"] = undefined /*out*/;
            resourceInputs["timeStarted"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
            resourceInputs["vaultId"] = undefined /*out*/;
            resourceInputs["version"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(DatabaseBackup.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering DatabaseBackup resources.
 */
export interface DatabaseBackupState {
    availabilityDomain?: pulumi.Input<string>;
    compartmentId?: pulumi.Input<string>;
    databaseEdition?: pulumi.Input<string>;
    databaseId?: pulumi.Input<string>;
    databaseSizeInGbs?: pulumi.Input<number>;
    displayName?: pulumi.Input<string>;
    keyStoreId?: pulumi.Input<string>;
    keyStoreWalletName?: pulumi.Input<string>;
    kmsKeyId?: pulumi.Input<string>;
    kmsKeyVersionId?: pulumi.Input<string>;
    lifecycleDetails?: pulumi.Input<string>;
    shape?: pulumi.Input<string>;
    state?: pulumi.Input<string>;
    timeEnded?: pulumi.Input<string>;
    timeStarted?: pulumi.Input<string>;
    timeouts?: pulumi.Input<inputs.DatabaseBackupTimeouts>;
    type?: pulumi.Input<string>;
    vaultId?: pulumi.Input<string>;
    version?: pulumi.Input<string>;
}

/**
 * The set of arguments for constructing a DatabaseBackup resource.
 */
export interface DatabaseBackupArgs {
    databaseId: pulumi.Input<string>;
    displayName: pulumi.Input<string>;
    timeouts?: pulumi.Input<inputs.DatabaseBackupTimeouts>;
}
