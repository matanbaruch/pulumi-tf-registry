// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export class BackupBackupVault extends pulumi.CustomResource {
    /**
     * Get an existing BackupBackupVault resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: BackupBackupVaultState, opts?: pulumi.CustomResourceOptions): BackupBackupVault {
        return new BackupBackupVault(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'awscc:index/backupBackupVault:BackupBackupVault';

    /**
     * Returns true if the given object is an instance of BackupBackupVault.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is BackupBackupVault {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === BackupBackupVault.__pulumiType;
    }

    public readonly accessPolicy!: pulumi.Output<string>;
    public /*out*/ readonly backupVaultArn!: pulumi.Output<string>;
    public readonly backupVaultName!: pulumi.Output<string>;
    public readonly backupVaultTags!: pulumi.Output<{[key: string]: string}>;
    public readonly encryptionKeyArn!: pulumi.Output<string>;
    public readonly lockConfiguration!: pulumi.Output<outputs.BackupBackupVaultLockConfiguration>;
    public readonly notifications!: pulumi.Output<outputs.BackupBackupVaultNotifications>;

    /**
     * Create a BackupBackupVault resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: BackupBackupVaultArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: BackupBackupVaultArgs | BackupBackupVaultState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as BackupBackupVaultState | undefined;
            resourceInputs["accessPolicy"] = state ? state.accessPolicy : undefined;
            resourceInputs["backupVaultArn"] = state ? state.backupVaultArn : undefined;
            resourceInputs["backupVaultName"] = state ? state.backupVaultName : undefined;
            resourceInputs["backupVaultTags"] = state ? state.backupVaultTags : undefined;
            resourceInputs["encryptionKeyArn"] = state ? state.encryptionKeyArn : undefined;
            resourceInputs["lockConfiguration"] = state ? state.lockConfiguration : undefined;
            resourceInputs["notifications"] = state ? state.notifications : undefined;
        } else {
            const args = argsOrState as BackupBackupVaultArgs | undefined;
            if ((!args || args.backupVaultName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'backupVaultName'");
            }
            resourceInputs["accessPolicy"] = args ? args.accessPolicy : undefined;
            resourceInputs["backupVaultName"] = args ? args.backupVaultName : undefined;
            resourceInputs["backupVaultTags"] = args ? args.backupVaultTags : undefined;
            resourceInputs["encryptionKeyArn"] = args ? args.encryptionKeyArn : undefined;
            resourceInputs["lockConfiguration"] = args ? args.lockConfiguration : undefined;
            resourceInputs["notifications"] = args ? args.notifications : undefined;
            resourceInputs["backupVaultArn"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(BackupBackupVault.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering BackupBackupVault resources.
 */
export interface BackupBackupVaultState {
    accessPolicy?: pulumi.Input<string>;
    backupVaultArn?: pulumi.Input<string>;
    backupVaultName?: pulumi.Input<string>;
    backupVaultTags?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    encryptionKeyArn?: pulumi.Input<string>;
    lockConfiguration?: pulumi.Input<inputs.BackupBackupVaultLockConfiguration>;
    notifications?: pulumi.Input<inputs.BackupBackupVaultNotifications>;
}

/**
 * The set of arguments for constructing a BackupBackupVault resource.
 */
export interface BackupBackupVaultArgs {
    accessPolicy?: pulumi.Input<string>;
    backupVaultName: pulumi.Input<string>;
    backupVaultTags?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    encryptionKeyArn?: pulumi.Input<string>;
    lockConfiguration?: pulumi.Input<inputs.BackupBackupVaultLockConfiguration>;
    notifications?: pulumi.Input<inputs.BackupBackupVaultNotifications>;
}
