// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export class BackupProtectedFileShare extends pulumi.CustomResource {
    /**
     * Get an existing BackupProtectedFileShare resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: BackupProtectedFileShareState, opts?: pulumi.CustomResourceOptions): BackupProtectedFileShare {
        return new BackupProtectedFileShare(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azurerm:index/backupProtectedFileShare:BackupProtectedFileShare';

    /**
     * Returns true if the given object is an instance of BackupProtectedFileShare.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is BackupProtectedFileShare {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === BackupProtectedFileShare.__pulumiType;
    }

    public readonly backupPolicyId!: pulumi.Output<string>;
    public readonly recoveryVaultName!: pulumi.Output<string>;
    public readonly resourceGroupName!: pulumi.Output<string>;
    public readonly sourceFileShareName!: pulumi.Output<string>;
    public readonly sourceStorageAccountId!: pulumi.Output<string>;
    public readonly timeouts!: pulumi.Output<outputs.BackupProtectedFileShareTimeouts | undefined>;

    /**
     * Create a BackupProtectedFileShare resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: BackupProtectedFileShareArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: BackupProtectedFileShareArgs | BackupProtectedFileShareState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as BackupProtectedFileShareState | undefined;
            resourceInputs["backupPolicyId"] = state ? state.backupPolicyId : undefined;
            resourceInputs["recoveryVaultName"] = state ? state.recoveryVaultName : undefined;
            resourceInputs["resourceGroupName"] = state ? state.resourceGroupName : undefined;
            resourceInputs["sourceFileShareName"] = state ? state.sourceFileShareName : undefined;
            resourceInputs["sourceStorageAccountId"] = state ? state.sourceStorageAccountId : undefined;
            resourceInputs["timeouts"] = state ? state.timeouts : undefined;
        } else {
            const args = argsOrState as BackupProtectedFileShareArgs | undefined;
            if ((!args || args.backupPolicyId === undefined) && !opts.urn) {
                throw new Error("Missing required property 'backupPolicyId'");
            }
            if ((!args || args.recoveryVaultName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'recoveryVaultName'");
            }
            if ((!args || args.resourceGroupName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'resourceGroupName'");
            }
            if ((!args || args.sourceFileShareName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'sourceFileShareName'");
            }
            if ((!args || args.sourceStorageAccountId === undefined) && !opts.urn) {
                throw new Error("Missing required property 'sourceStorageAccountId'");
            }
            resourceInputs["backupPolicyId"] = args ? args.backupPolicyId : undefined;
            resourceInputs["recoveryVaultName"] = args ? args.recoveryVaultName : undefined;
            resourceInputs["resourceGroupName"] = args ? args.resourceGroupName : undefined;
            resourceInputs["sourceFileShareName"] = args ? args.sourceFileShareName : undefined;
            resourceInputs["sourceStorageAccountId"] = args ? args.sourceStorageAccountId : undefined;
            resourceInputs["timeouts"] = args ? args.timeouts : undefined;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(BackupProtectedFileShare.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering BackupProtectedFileShare resources.
 */
export interface BackupProtectedFileShareState {
    backupPolicyId?: pulumi.Input<string>;
    recoveryVaultName?: pulumi.Input<string>;
    resourceGroupName?: pulumi.Input<string>;
    sourceFileShareName?: pulumi.Input<string>;
    sourceStorageAccountId?: pulumi.Input<string>;
    timeouts?: pulumi.Input<inputs.BackupProtectedFileShareTimeouts>;
}

/**
 * The set of arguments for constructing a BackupProtectedFileShare resource.
 */
export interface BackupProtectedFileShareArgs {
    backupPolicyId: pulumi.Input<string>;
    recoveryVaultName: pulumi.Input<string>;
    resourceGroupName: pulumi.Input<string>;
    sourceFileShareName: pulumi.Input<string>;
    sourceStorageAccountId: pulumi.Input<string>;
    timeouts?: pulumi.Input<inputs.BackupProtectedFileShareTimeouts>;
}
