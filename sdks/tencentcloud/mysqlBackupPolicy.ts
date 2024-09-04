// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export class MysqlBackupPolicy extends pulumi.CustomResource {
    /**
     * Get an existing MysqlBackupPolicy resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: MysqlBackupPolicyState, opts?: pulumi.CustomResourceOptions): MysqlBackupPolicy {
        return new MysqlBackupPolicy(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'tencentcloud:index/mysqlBackupPolicy:MysqlBackupPolicy';

    /**
     * Returns true if the given object is an instance of MysqlBackupPolicy.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is MysqlBackupPolicy {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === MysqlBackupPolicy.__pulumiType;
    }

    /**
     * Backup method. Supported values include: `physical` - physical backup.
     */
    public readonly backupModel!: pulumi.Output<string | undefined>;
    /**
     * Instance backup time, in the format of 'HH:mm-HH:mm'. Time setting interval is four hours. Default to `02:00-06:00`. The
     * following value can be supported: `02:00-06:00`, `06:00-10:00`, `10:00-14:00`, `14:00-18:00`, `18:00-22:00`, and
     * `22:00-02:00`.
     */
    public readonly backupTime!: pulumi.Output<string | undefined>;
    /**
     * Binlog retention time, in days. The minimum value is 7 days and the maximum value is 1830 days. This value cannot be set
     * greater than the backup file retention time.
     */
    public readonly binlogPeriod!: pulumi.Output<number>;
    /**
     * The standard starting number of days for log backup storage. The log backup will be converted when it reaches the
     * standard starting number of days for storage. The minimum is 30 days and must not be greater than the number of days for
     * log backup retention.
     */
    public readonly binlogStandbyDays!: pulumi.Output<number>;
    /**
     * Whether to enable the log backup standard storage policy, `off` - close, `on` - open, the default is off.
     */
    public readonly enableBinlogStandby!: pulumi.Output<string | undefined>;
    /**
     * Instance ID to which policies will be applied.
     */
    public readonly mysqlId!: pulumi.Output<string>;
    /**
     * The retention time of backup files, in days. The minimum value is 7 days and the maximum value is 1830 days. And default
     * value is `7`.
     */
    public readonly retentionPeriod!: pulumi.Output<number | undefined>;

    /**
     * Create a MysqlBackupPolicy resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: MysqlBackupPolicyArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: MysqlBackupPolicyArgs | MysqlBackupPolicyState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as MysqlBackupPolicyState | undefined;
            resourceInputs["backupModel"] = state ? state.backupModel : undefined;
            resourceInputs["backupTime"] = state ? state.backupTime : undefined;
            resourceInputs["binlogPeriod"] = state ? state.binlogPeriod : undefined;
            resourceInputs["binlogStandbyDays"] = state ? state.binlogStandbyDays : undefined;
            resourceInputs["enableBinlogStandby"] = state ? state.enableBinlogStandby : undefined;
            resourceInputs["mysqlId"] = state ? state.mysqlId : undefined;
            resourceInputs["retentionPeriod"] = state ? state.retentionPeriod : undefined;
        } else {
            const args = argsOrState as MysqlBackupPolicyArgs | undefined;
            if ((!args || args.mysqlId === undefined) && !opts.urn) {
                throw new Error("Missing required property 'mysqlId'");
            }
            resourceInputs["backupModel"] = args ? args.backupModel : undefined;
            resourceInputs["backupTime"] = args ? args.backupTime : undefined;
            resourceInputs["binlogPeriod"] = args ? args.binlogPeriod : undefined;
            resourceInputs["binlogStandbyDays"] = args ? args.binlogStandbyDays : undefined;
            resourceInputs["enableBinlogStandby"] = args ? args.enableBinlogStandby : undefined;
            resourceInputs["mysqlId"] = args ? args.mysqlId : undefined;
            resourceInputs["retentionPeriod"] = args ? args.retentionPeriod : undefined;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(MysqlBackupPolicy.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering MysqlBackupPolicy resources.
 */
export interface MysqlBackupPolicyState {
    /**
     * Backup method. Supported values include: `physical` - physical backup.
     */
    backupModel?: pulumi.Input<string>;
    /**
     * Instance backup time, in the format of 'HH:mm-HH:mm'. Time setting interval is four hours. Default to `02:00-06:00`. The
     * following value can be supported: `02:00-06:00`, `06:00-10:00`, `10:00-14:00`, `14:00-18:00`, `18:00-22:00`, and
     * `22:00-02:00`.
     */
    backupTime?: pulumi.Input<string>;
    /**
     * Binlog retention time, in days. The minimum value is 7 days and the maximum value is 1830 days. This value cannot be set
     * greater than the backup file retention time.
     */
    binlogPeriod?: pulumi.Input<number>;
    /**
     * The standard starting number of days for log backup storage. The log backup will be converted when it reaches the
     * standard starting number of days for storage. The minimum is 30 days and must not be greater than the number of days for
     * log backup retention.
     */
    binlogStandbyDays?: pulumi.Input<number>;
    /**
     * Whether to enable the log backup standard storage policy, `off` - close, `on` - open, the default is off.
     */
    enableBinlogStandby?: pulumi.Input<string>;
    /**
     * Instance ID to which policies will be applied.
     */
    mysqlId?: pulumi.Input<string>;
    /**
     * The retention time of backup files, in days. The minimum value is 7 days and the maximum value is 1830 days. And default
     * value is `7`.
     */
    retentionPeriod?: pulumi.Input<number>;
}

/**
 * The set of arguments for constructing a MysqlBackupPolicy resource.
 */
export interface MysqlBackupPolicyArgs {
    /**
     * Backup method. Supported values include: `physical` - physical backup.
     */
    backupModel?: pulumi.Input<string>;
    /**
     * Instance backup time, in the format of 'HH:mm-HH:mm'. Time setting interval is four hours. Default to `02:00-06:00`. The
     * following value can be supported: `02:00-06:00`, `06:00-10:00`, `10:00-14:00`, `14:00-18:00`, `18:00-22:00`, and
     * `22:00-02:00`.
     */
    backupTime?: pulumi.Input<string>;
    /**
     * Binlog retention time, in days. The minimum value is 7 days and the maximum value is 1830 days. This value cannot be set
     * greater than the backup file retention time.
     */
    binlogPeriod?: pulumi.Input<number>;
    /**
     * The standard starting number of days for log backup storage. The log backup will be converted when it reaches the
     * standard starting number of days for storage. The minimum is 30 days and must not be greater than the number of days for
     * log backup retention.
     */
    binlogStandbyDays?: pulumi.Input<number>;
    /**
     * Whether to enable the log backup standard storage policy, `off` - close, `on` - open, the default is off.
     */
    enableBinlogStandby?: pulumi.Input<string>;
    /**
     * Instance ID to which policies will be applied.
     */
    mysqlId: pulumi.Input<string>;
    /**
     * The retention time of backup files, in days. The minimum value is 7 days and the maximum value is 1830 days. And default
     * value is `7`.
     */
    retentionPeriod?: pulumi.Input<number>;
}
