// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export class BackupPeriodic extends pulumi.CustomResource {
    /**
     * Get an existing BackupPeriodic resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: BackupPeriodicState, opts?: pulumi.CustomResourceOptions): BackupPeriodic {
        return new BackupPeriodic(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'thunder:index/backupPeriodic:BackupPeriodic';

    /**
     * Returns true if the given object is an instance of BackupPeriodic.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is BackupPeriodic {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === BackupPeriodic.__pulumiType;
    }

    /**
     * Specify interval days
     */
    public readonly day!: pulumi.Output<number | undefined>;
    /**
     * Encrypt the backup file
     */
    public readonly encrypt!: pulumi.Output<number | undefined>;
    /**
     * Backup fixed-nat port mapping files
     */
    public readonly fixedNat!: pulumi.Output<number | undefined>;
    /**
     * Specify interval hours
     */
    public readonly hour!: pulumi.Output<number | undefined>;
    /**
     * Backup log files
     */
    public readonly log!: pulumi.Output<number | undefined>;
    /**
     * profile name for remote url
     */
    public readonly remoteFile!: pulumi.Output<string | undefined>;
    /**
     * profile name to store remote url
     */
    public readonly storeName!: pulumi.Output<string | undefined>;
    /**
     * Backup system files
     */
    public readonly system!: pulumi.Output<number | undefined>;
    /**
     * Use management port as source port
     */
    public readonly useMgmtPort!: pulumi.Output<number | undefined>;
    /**
     * uuid of the object
     */
    public readonly uuid!: pulumi.Output<string>;
    /**
     * Specify interval weeks
     */
    public readonly week!: pulumi.Output<number | undefined>;

    /**
     * Create a BackupPeriodic resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args?: BackupPeriodicArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: BackupPeriodicArgs | BackupPeriodicState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as BackupPeriodicState | undefined;
            resourceInputs["day"] = state ? state.day : undefined;
            resourceInputs["encrypt"] = state ? state.encrypt : undefined;
            resourceInputs["fixedNat"] = state ? state.fixedNat : undefined;
            resourceInputs["hour"] = state ? state.hour : undefined;
            resourceInputs["log"] = state ? state.log : undefined;
            resourceInputs["remoteFile"] = state ? state.remoteFile : undefined;
            resourceInputs["storeName"] = state ? state.storeName : undefined;
            resourceInputs["system"] = state ? state.system : undefined;
            resourceInputs["useMgmtPort"] = state ? state.useMgmtPort : undefined;
            resourceInputs["uuid"] = state ? state.uuid : undefined;
            resourceInputs["week"] = state ? state.week : undefined;
        } else {
            const args = argsOrState as BackupPeriodicArgs | undefined;
            resourceInputs["day"] = args ? args.day : undefined;
            resourceInputs["encrypt"] = args ? args.encrypt : undefined;
            resourceInputs["fixedNat"] = args ? args.fixedNat : undefined;
            resourceInputs["hour"] = args ? args.hour : undefined;
            resourceInputs["log"] = args ? args.log : undefined;
            resourceInputs["remoteFile"] = args ? args.remoteFile : undefined;
            resourceInputs["storeName"] = args ? args.storeName : undefined;
            resourceInputs["system"] = args ? args.system : undefined;
            resourceInputs["useMgmtPort"] = args ? args.useMgmtPort : undefined;
            resourceInputs["uuid"] = args ? args.uuid : undefined;
            resourceInputs["week"] = args ? args.week : undefined;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(BackupPeriodic.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering BackupPeriodic resources.
 */
export interface BackupPeriodicState {
    /**
     * Specify interval days
     */
    day?: pulumi.Input<number>;
    /**
     * Encrypt the backup file
     */
    encrypt?: pulumi.Input<number>;
    /**
     * Backup fixed-nat port mapping files
     */
    fixedNat?: pulumi.Input<number>;
    /**
     * Specify interval hours
     */
    hour?: pulumi.Input<number>;
    /**
     * Backup log files
     */
    log?: pulumi.Input<number>;
    /**
     * profile name for remote url
     */
    remoteFile?: pulumi.Input<string>;
    /**
     * profile name to store remote url
     */
    storeName?: pulumi.Input<string>;
    /**
     * Backup system files
     */
    system?: pulumi.Input<number>;
    /**
     * Use management port as source port
     */
    useMgmtPort?: pulumi.Input<number>;
    /**
     * uuid of the object
     */
    uuid?: pulumi.Input<string>;
    /**
     * Specify interval weeks
     */
    week?: pulumi.Input<number>;
}

/**
 * The set of arguments for constructing a BackupPeriodic resource.
 */
export interface BackupPeriodicArgs {
    /**
     * Specify interval days
     */
    day?: pulumi.Input<number>;
    /**
     * Encrypt the backup file
     */
    encrypt?: pulumi.Input<number>;
    /**
     * Backup fixed-nat port mapping files
     */
    fixedNat?: pulumi.Input<number>;
    /**
     * Specify interval hours
     */
    hour?: pulumi.Input<number>;
    /**
     * Backup log files
     */
    log?: pulumi.Input<number>;
    /**
     * profile name for remote url
     */
    remoteFile?: pulumi.Input<string>;
    /**
     * profile name to store remote url
     */
    storeName?: pulumi.Input<string>;
    /**
     * Backup system files
     */
    system?: pulumi.Input<number>;
    /**
     * Use management port as source port
     */
    useMgmtPort?: pulumi.Input<number>;
    /**
     * uuid of the object
     */
    uuid?: pulumi.Input<string>;
    /**
     * Specify interval weeks
     */
    week?: pulumi.Input<number>;
}
