// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export class BackupSystem extends pulumi.CustomResource {
    /**
     * Get an existing BackupSystem resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: BackupSystemState, opts?: pulumi.CustomResourceOptions): BackupSystem {
        return new BackupSystem(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'thunder:index/backupSystem:BackupSystem';

    /**
     * Returns true if the given object is an instance of BackupSystem.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is BackupSystem {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === BackupSystem.__pulumiType;
    }

    /**
     * Encrypt the backup file
     */
    public readonly encrypt!: pulumi.Output<number | undefined>;
    /**
     * password for the remote site
     */
    public readonly password!: pulumi.Output<string | undefined>;
    /**
     * profile name for remote url
     */
    public readonly remoteFile!: pulumi.Output<string | undefined>;
    /**
     * Save backup store information
     */
    public readonly storeName!: pulumi.Output<string | undefined>;
    /**
     * Use management port as source port
     */
    public readonly useMgmtPort!: pulumi.Output<number | undefined>;

    /**
     * Create a BackupSystem resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args?: BackupSystemArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: BackupSystemArgs | BackupSystemState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as BackupSystemState | undefined;
            resourceInputs["encrypt"] = state ? state.encrypt : undefined;
            resourceInputs["password"] = state ? state.password : undefined;
            resourceInputs["remoteFile"] = state ? state.remoteFile : undefined;
            resourceInputs["storeName"] = state ? state.storeName : undefined;
            resourceInputs["useMgmtPort"] = state ? state.useMgmtPort : undefined;
        } else {
            const args = argsOrState as BackupSystemArgs | undefined;
            resourceInputs["encrypt"] = args ? args.encrypt : undefined;
            resourceInputs["password"] = args ? args.password : undefined;
            resourceInputs["remoteFile"] = args ? args.remoteFile : undefined;
            resourceInputs["storeName"] = args ? args.storeName : undefined;
            resourceInputs["useMgmtPort"] = args ? args.useMgmtPort : undefined;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(BackupSystem.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering BackupSystem resources.
 */
export interface BackupSystemState {
    /**
     * Encrypt the backup file
     */
    encrypt?: pulumi.Input<number>;
    /**
     * password for the remote site
     */
    password?: pulumi.Input<string>;
    /**
     * profile name for remote url
     */
    remoteFile?: pulumi.Input<string>;
    /**
     * Save backup store information
     */
    storeName?: pulumi.Input<string>;
    /**
     * Use management port as source port
     */
    useMgmtPort?: pulumi.Input<number>;
}

/**
 * The set of arguments for constructing a BackupSystem resource.
 */
export interface BackupSystemArgs {
    /**
     * Encrypt the backup file
     */
    encrypt?: pulumi.Input<number>;
    /**
     * password for the remote site
     */
    password?: pulumi.Input<string>;
    /**
     * profile name for remote url
     */
    remoteFile?: pulumi.Input<string>;
    /**
     * Save backup store information
     */
    storeName?: pulumi.Input<string>;
    /**
     * Use management port as source port
     */
    useMgmtPort?: pulumi.Input<number>;
}
