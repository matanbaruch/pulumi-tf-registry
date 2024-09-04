// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export class SystemLogSettingsRollinganalyzer extends pulumi.CustomResource {
    /**
     * Get an existing SystemLogSettingsRollinganalyzer resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: SystemLogSettingsRollinganalyzerState, opts?: pulumi.CustomResourceOptions): SystemLogSettingsRollinganalyzer {
        return new SystemLogSettingsRollinganalyzer(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'fortimanager:index/systemLogSettingsRollinganalyzer:SystemLogSettingsRollinganalyzer';

    /**
     * Returns true if the given object is an instance of SystemLogSettingsRollinganalyzer.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is SystemLogSettingsRollinganalyzer {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === SystemLogSettingsRollinganalyzer.__pulumiType;
    }

    public readonly days!: pulumi.Output<string[]>;
    public readonly delFiles!: pulumi.Output<string>;
    public readonly directory!: pulumi.Output<string | undefined>;
    public readonly fileSize!: pulumi.Output<number>;
    public readonly gzipFormat!: pulumi.Output<string>;
    public readonly hour!: pulumi.Output<number | undefined>;
    public readonly ip!: pulumi.Output<string>;
    public readonly ip2!: pulumi.Output<string>;
    public readonly ip3!: pulumi.Output<string>;
    public readonly logFormat!: pulumi.Output<string>;
    public readonly min!: pulumi.Output<number | undefined>;
    public readonly password2s!: pulumi.Output<string[]>;
    public readonly password3s!: pulumi.Output<string[]>;
    public readonly passwords!: pulumi.Output<string[]>;
    public readonly port!: pulumi.Output<number | undefined>;
    public readonly port2!: pulumi.Output<number | undefined>;
    public readonly port3!: pulumi.Output<number | undefined>;
    public readonly rollingUpgradeStatus!: pulumi.Output<number | undefined>;
    public readonly server!: pulumi.Output<string | undefined>;
    public readonly server2!: pulumi.Output<string | undefined>;
    public readonly server3!: pulumi.Output<string | undefined>;
    public readonly serverType!: pulumi.Output<string>;
    public readonly upload!: pulumi.Output<string>;
    public readonly uploadHour!: pulumi.Output<number | undefined>;
    public readonly uploadMode!: pulumi.Output<string>;
    public readonly uploadTrigger!: pulumi.Output<string>;
    public readonly username!: pulumi.Output<string | undefined>;
    public readonly username2!: pulumi.Output<string | undefined>;
    public readonly username3!: pulumi.Output<string | undefined>;
    public readonly when!: pulumi.Output<string>;

    /**
     * Create a SystemLogSettingsRollinganalyzer resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args?: SystemLogSettingsRollinganalyzerArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: SystemLogSettingsRollinganalyzerArgs | SystemLogSettingsRollinganalyzerState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as SystemLogSettingsRollinganalyzerState | undefined;
            resourceInputs["days"] = state ? state.days : undefined;
            resourceInputs["delFiles"] = state ? state.delFiles : undefined;
            resourceInputs["directory"] = state ? state.directory : undefined;
            resourceInputs["fileSize"] = state ? state.fileSize : undefined;
            resourceInputs["gzipFormat"] = state ? state.gzipFormat : undefined;
            resourceInputs["hour"] = state ? state.hour : undefined;
            resourceInputs["ip"] = state ? state.ip : undefined;
            resourceInputs["ip2"] = state ? state.ip2 : undefined;
            resourceInputs["ip3"] = state ? state.ip3 : undefined;
            resourceInputs["logFormat"] = state ? state.logFormat : undefined;
            resourceInputs["min"] = state ? state.min : undefined;
            resourceInputs["password2s"] = state ? state.password2s : undefined;
            resourceInputs["password3s"] = state ? state.password3s : undefined;
            resourceInputs["passwords"] = state ? state.passwords : undefined;
            resourceInputs["port"] = state ? state.port : undefined;
            resourceInputs["port2"] = state ? state.port2 : undefined;
            resourceInputs["port3"] = state ? state.port3 : undefined;
            resourceInputs["rollingUpgradeStatus"] = state ? state.rollingUpgradeStatus : undefined;
            resourceInputs["server"] = state ? state.server : undefined;
            resourceInputs["server2"] = state ? state.server2 : undefined;
            resourceInputs["server3"] = state ? state.server3 : undefined;
            resourceInputs["serverType"] = state ? state.serverType : undefined;
            resourceInputs["upload"] = state ? state.upload : undefined;
            resourceInputs["uploadHour"] = state ? state.uploadHour : undefined;
            resourceInputs["uploadMode"] = state ? state.uploadMode : undefined;
            resourceInputs["uploadTrigger"] = state ? state.uploadTrigger : undefined;
            resourceInputs["username"] = state ? state.username : undefined;
            resourceInputs["username2"] = state ? state.username2 : undefined;
            resourceInputs["username3"] = state ? state.username3 : undefined;
            resourceInputs["when"] = state ? state.when : undefined;
        } else {
            const args = argsOrState as SystemLogSettingsRollinganalyzerArgs | undefined;
            resourceInputs["days"] = args ? args.days : undefined;
            resourceInputs["delFiles"] = args ? args.delFiles : undefined;
            resourceInputs["directory"] = args ? args.directory : undefined;
            resourceInputs["fileSize"] = args ? args.fileSize : undefined;
            resourceInputs["gzipFormat"] = args ? args.gzipFormat : undefined;
            resourceInputs["hour"] = args ? args.hour : undefined;
            resourceInputs["ip"] = args ? args.ip : undefined;
            resourceInputs["ip2"] = args ? args.ip2 : undefined;
            resourceInputs["ip3"] = args ? args.ip3 : undefined;
            resourceInputs["logFormat"] = args ? args.logFormat : undefined;
            resourceInputs["min"] = args ? args.min : undefined;
            resourceInputs["password2s"] = args?.password2s ? pulumi.secret(args.password2s) : undefined;
            resourceInputs["password3s"] = args?.password3s ? pulumi.secret(args.password3s) : undefined;
            resourceInputs["passwords"] = args?.passwords ? pulumi.secret(args.passwords) : undefined;
            resourceInputs["port"] = args ? args.port : undefined;
            resourceInputs["port2"] = args ? args.port2 : undefined;
            resourceInputs["port3"] = args ? args.port3 : undefined;
            resourceInputs["rollingUpgradeStatus"] = args ? args.rollingUpgradeStatus : undefined;
            resourceInputs["server"] = args ? args.server : undefined;
            resourceInputs["server2"] = args ? args.server2 : undefined;
            resourceInputs["server3"] = args ? args.server3 : undefined;
            resourceInputs["serverType"] = args ? args.serverType : undefined;
            resourceInputs["upload"] = args ? args.upload : undefined;
            resourceInputs["uploadHour"] = args ? args.uploadHour : undefined;
            resourceInputs["uploadMode"] = args ? args.uploadMode : undefined;
            resourceInputs["uploadTrigger"] = args ? args.uploadTrigger : undefined;
            resourceInputs["username"] = args ? args.username : undefined;
            resourceInputs["username2"] = args ? args.username2 : undefined;
            resourceInputs["username3"] = args ? args.username3 : undefined;
            resourceInputs["when"] = args ? args.when : undefined;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const secretOpts = { additionalSecretOutputs: ["password2s", "password3s", "passwords"] };
        opts = pulumi.mergeOptions(opts, secretOpts);
        super(SystemLogSettingsRollinganalyzer.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering SystemLogSettingsRollinganalyzer resources.
 */
export interface SystemLogSettingsRollinganalyzerState {
    days?: pulumi.Input<pulumi.Input<string>[]>;
    delFiles?: pulumi.Input<string>;
    directory?: pulumi.Input<string>;
    fileSize?: pulumi.Input<number>;
    gzipFormat?: pulumi.Input<string>;
    hour?: pulumi.Input<number>;
    ip?: pulumi.Input<string>;
    ip2?: pulumi.Input<string>;
    ip3?: pulumi.Input<string>;
    logFormat?: pulumi.Input<string>;
    min?: pulumi.Input<number>;
    password2s?: pulumi.Input<pulumi.Input<string>[]>;
    password3s?: pulumi.Input<pulumi.Input<string>[]>;
    passwords?: pulumi.Input<pulumi.Input<string>[]>;
    port?: pulumi.Input<number>;
    port2?: pulumi.Input<number>;
    port3?: pulumi.Input<number>;
    rollingUpgradeStatus?: pulumi.Input<number>;
    server?: pulumi.Input<string>;
    server2?: pulumi.Input<string>;
    server3?: pulumi.Input<string>;
    serverType?: pulumi.Input<string>;
    upload?: pulumi.Input<string>;
    uploadHour?: pulumi.Input<number>;
    uploadMode?: pulumi.Input<string>;
    uploadTrigger?: pulumi.Input<string>;
    username?: pulumi.Input<string>;
    username2?: pulumi.Input<string>;
    username3?: pulumi.Input<string>;
    when?: pulumi.Input<string>;
}

/**
 * The set of arguments for constructing a SystemLogSettingsRollinganalyzer resource.
 */
export interface SystemLogSettingsRollinganalyzerArgs {
    days?: pulumi.Input<pulumi.Input<string>[]>;
    delFiles?: pulumi.Input<string>;
    directory?: pulumi.Input<string>;
    fileSize?: pulumi.Input<number>;
    gzipFormat?: pulumi.Input<string>;
    hour?: pulumi.Input<number>;
    ip?: pulumi.Input<string>;
    ip2?: pulumi.Input<string>;
    ip3?: pulumi.Input<string>;
    logFormat?: pulumi.Input<string>;
    min?: pulumi.Input<number>;
    password2s?: pulumi.Input<pulumi.Input<string>[]>;
    password3s?: pulumi.Input<pulumi.Input<string>[]>;
    passwords?: pulumi.Input<pulumi.Input<string>[]>;
    port?: pulumi.Input<number>;
    port2?: pulumi.Input<number>;
    port3?: pulumi.Input<number>;
    rollingUpgradeStatus?: pulumi.Input<number>;
    server?: pulumi.Input<string>;
    server2?: pulumi.Input<string>;
    server3?: pulumi.Input<string>;
    serverType?: pulumi.Input<string>;
    upload?: pulumi.Input<string>;
    uploadHour?: pulumi.Input<number>;
    uploadMode?: pulumi.Input<string>;
    uploadTrigger?: pulumi.Input<string>;
    username?: pulumi.Input<string>;
    username2?: pulumi.Input<string>;
    username3?: pulumi.Input<string>;
    when?: pulumi.Input<string>;
}
