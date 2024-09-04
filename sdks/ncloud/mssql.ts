// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export class Mssql extends pulumi.CustomResource {
    /**
     * Get an existing Mssql resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: MssqlState, opts?: pulumi.CustomResourceOptions): Mssql {
        return new Mssql(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'ncloud:index/mssql:Mssql';

    /**
     * Returns true if the given object is an instance of Mssql.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is Mssql {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === Mssql.__pulumiType;
    }

    public /*out*/ readonly accessControlGroupNoLists!: pulumi.Output<string[]>;
    public readonly backupFileRetentionPeriod!: pulumi.Output<number>;
    /**
     * ex) 01:15
     */
    public readonly backupTime!: pulumi.Output<string>;
    public readonly characterSetName!: pulumi.Output<string>;
    public readonly configGroupNo!: pulumi.Output<string>;
    /**
     * default: SSD
     */
    public readonly dataStorageType!: pulumi.Output<string>;
    public /*out*/ readonly engineVersion!: pulumi.Output<string>;
    public readonly imageProductCode!: pulumi.Output<string>;
    public readonly isAutomaticBackup!: pulumi.Output<boolean | undefined>;
    /**
     * default: true
     */
    public readonly isHa!: pulumi.Output<boolean>;
    public /*out*/ readonly mssqlServerLists!: pulumi.Output<outputs.MssqlMssqlServerList[]>;
    public readonly port!: pulumi.Output<number>;
    public readonly productCode!: pulumi.Output<string | undefined>;
    public /*out*/ readonly regionCode!: pulumi.Output<string>;
    public readonly serviceName!: pulumi.Output<string>;
    public readonly subnetNo!: pulumi.Output<string>;
    public readonly userName!: pulumi.Output<string>;
    public readonly userPassword!: pulumi.Output<string>;
    public /*out*/ readonly vpcNo!: pulumi.Output<string>;

    /**
     * Create a Mssql resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: MssqlArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: MssqlArgs | MssqlState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as MssqlState | undefined;
            resourceInputs["accessControlGroupNoLists"] = state ? state.accessControlGroupNoLists : undefined;
            resourceInputs["backupFileRetentionPeriod"] = state ? state.backupFileRetentionPeriod : undefined;
            resourceInputs["backupTime"] = state ? state.backupTime : undefined;
            resourceInputs["characterSetName"] = state ? state.characterSetName : undefined;
            resourceInputs["configGroupNo"] = state ? state.configGroupNo : undefined;
            resourceInputs["dataStorageType"] = state ? state.dataStorageType : undefined;
            resourceInputs["engineVersion"] = state ? state.engineVersion : undefined;
            resourceInputs["imageProductCode"] = state ? state.imageProductCode : undefined;
            resourceInputs["isAutomaticBackup"] = state ? state.isAutomaticBackup : undefined;
            resourceInputs["isHa"] = state ? state.isHa : undefined;
            resourceInputs["mssqlServerLists"] = state ? state.mssqlServerLists : undefined;
            resourceInputs["port"] = state ? state.port : undefined;
            resourceInputs["productCode"] = state ? state.productCode : undefined;
            resourceInputs["regionCode"] = state ? state.regionCode : undefined;
            resourceInputs["serviceName"] = state ? state.serviceName : undefined;
            resourceInputs["subnetNo"] = state ? state.subnetNo : undefined;
            resourceInputs["userName"] = state ? state.userName : undefined;
            resourceInputs["userPassword"] = state ? state.userPassword : undefined;
            resourceInputs["vpcNo"] = state ? state.vpcNo : undefined;
        } else {
            const args = argsOrState as MssqlArgs | undefined;
            if ((!args || args.isHa === undefined) && !opts.urn) {
                throw new Error("Missing required property 'isHa'");
            }
            if ((!args || args.serviceName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'serviceName'");
            }
            if ((!args || args.subnetNo === undefined) && !opts.urn) {
                throw new Error("Missing required property 'subnetNo'");
            }
            if ((!args || args.userName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'userName'");
            }
            if ((!args || args.userPassword === undefined) && !opts.urn) {
                throw new Error("Missing required property 'userPassword'");
            }
            resourceInputs["backupFileRetentionPeriod"] = args ? args.backupFileRetentionPeriod : undefined;
            resourceInputs["backupTime"] = args ? args.backupTime : undefined;
            resourceInputs["characterSetName"] = args ? args.characterSetName : undefined;
            resourceInputs["configGroupNo"] = args ? args.configGroupNo : undefined;
            resourceInputs["dataStorageType"] = args ? args.dataStorageType : undefined;
            resourceInputs["imageProductCode"] = args ? args.imageProductCode : undefined;
            resourceInputs["isAutomaticBackup"] = args ? args.isAutomaticBackup : undefined;
            resourceInputs["isHa"] = args ? args.isHa : undefined;
            resourceInputs["port"] = args ? args.port : undefined;
            resourceInputs["productCode"] = args ? args.productCode : undefined;
            resourceInputs["serviceName"] = args ? args.serviceName : undefined;
            resourceInputs["subnetNo"] = args ? args.subnetNo : undefined;
            resourceInputs["userName"] = args ? args.userName : undefined;
            resourceInputs["userPassword"] = args?.userPassword ? pulumi.secret(args.userPassword) : undefined;
            resourceInputs["accessControlGroupNoLists"] = undefined /*out*/;
            resourceInputs["engineVersion"] = undefined /*out*/;
            resourceInputs["mssqlServerLists"] = undefined /*out*/;
            resourceInputs["regionCode"] = undefined /*out*/;
            resourceInputs["vpcNo"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const secretOpts = { additionalSecretOutputs: ["userPassword"] };
        opts = pulumi.mergeOptions(opts, secretOpts);
        super(Mssql.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering Mssql resources.
 */
export interface MssqlState {
    accessControlGroupNoLists?: pulumi.Input<pulumi.Input<string>[]>;
    backupFileRetentionPeriod?: pulumi.Input<number>;
    /**
     * ex) 01:15
     */
    backupTime?: pulumi.Input<string>;
    characterSetName?: pulumi.Input<string>;
    configGroupNo?: pulumi.Input<string>;
    /**
     * default: SSD
     */
    dataStorageType?: pulumi.Input<string>;
    engineVersion?: pulumi.Input<string>;
    imageProductCode?: pulumi.Input<string>;
    isAutomaticBackup?: pulumi.Input<boolean>;
    /**
     * default: true
     */
    isHa?: pulumi.Input<boolean>;
    mssqlServerLists?: pulumi.Input<pulumi.Input<inputs.MssqlMssqlServerList>[]>;
    port?: pulumi.Input<number>;
    productCode?: pulumi.Input<string>;
    regionCode?: pulumi.Input<string>;
    serviceName?: pulumi.Input<string>;
    subnetNo?: pulumi.Input<string>;
    userName?: pulumi.Input<string>;
    userPassword?: pulumi.Input<string>;
    vpcNo?: pulumi.Input<string>;
}

/**
 * The set of arguments for constructing a Mssql resource.
 */
export interface MssqlArgs {
    backupFileRetentionPeriod?: pulumi.Input<number>;
    /**
     * ex) 01:15
     */
    backupTime?: pulumi.Input<string>;
    characterSetName?: pulumi.Input<string>;
    configGroupNo?: pulumi.Input<string>;
    /**
     * default: SSD
     */
    dataStorageType?: pulumi.Input<string>;
    imageProductCode?: pulumi.Input<string>;
    isAutomaticBackup?: pulumi.Input<boolean>;
    /**
     * default: true
     */
    isHa: pulumi.Input<boolean>;
    port?: pulumi.Input<number>;
    productCode?: pulumi.Input<string>;
    serviceName: pulumi.Input<string>;
    subnetNo: pulumi.Input<string>;
    userName: pulumi.Input<string>;
    userPassword: pulumi.Input<string>;
}
