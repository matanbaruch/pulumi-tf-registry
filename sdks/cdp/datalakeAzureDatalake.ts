// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export class DatalakeAzureDatalake extends pulumi.CustomResource {
    /**
     * Get an existing DatalakeAzureDatalake resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: DatalakeAzureDatalakeState, opts?: pulumi.CustomResourceOptions): DatalakeAzureDatalake {
        return new DatalakeAzureDatalake(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'cdp:index/datalakeAzureDatalake:DatalakeAzureDatalake';

    /**
     * Returns true if the given object is an instance of DatalakeAzureDatalake.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is DatalakeAzureDatalake {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === DatalakeAzureDatalake.__pulumiType;
    }

    public /*out*/ readonly certificateExpirationState!: pulumi.Output<string>;
    public /*out*/ readonly creationDate!: pulumi.Output<string>;
    public /*out*/ readonly crn!: pulumi.Output<string>;
    /**
     * The type of the azure database. FLEXIBLE_SERVER is the next generation managed PostgreSQL service in Azure that provides
     * maximum flexibility over your database, built-in cost-optimizations. SINGLE_SERVER is a fully managed database service
     * with minimal requirements for customizations of the database.
     */
    public readonly databaseType!: pulumi.Output<string | undefined>;
    public readonly datalakeName!: pulumi.Output<string>;
    public readonly enableRangerRaz!: pulumi.Output<boolean>;
    public /*out*/ readonly environmentCrn!: pulumi.Output<string>;
    public readonly environmentName!: pulumi.Output<string>;
    /**
     * This argument allows you to specify the subnet ID for the subnet within which you want to configure your Azure Flexible
     * Server.
     */
    public readonly flexibleServerDelegatedSubnetId!: pulumi.Output<string | undefined>;
    public readonly image!: pulumi.Output<outputs.DatalakeAzureDatalakeImage | undefined>;
    public readonly javaVersion!: pulumi.Output<number | undefined>;
    /**
     * Represents the Azure load balancer SKU type. The current default is BASIC. To disable the load balancer, use type NONE.
     * Possible values: BASIC, STANDARD, NONE
     */
    public readonly loadBalancerSku!: pulumi.Output<string | undefined>;
    public readonly managedIdentity!: pulumi.Output<string>;
    /**
     * Creates CDP datalake distributed across multiple availability zones in an Azure region.
     */
    public readonly multiAz!: pulumi.Output<boolean | undefined>;
    /**
     * Polling related configuration options that could specify various values that will be used during CDP resource creation.
     */
    public readonly pollingOptions!: pulumi.Output<outputs.DatalakeAzureDatalakePollingOptions | undefined>;
    public readonly recipes!: pulumi.Output<outputs.DatalakeAzureDatalakeRecipe[] | undefined>;
    public readonly runtime!: pulumi.Output<string | undefined>;
    public readonly scale!: pulumi.Output<string | undefined>;
    public /*out*/ readonly status!: pulumi.Output<string>;
    public /*out*/ readonly statusReason!: pulumi.Output<string>;
    public readonly storageLocationBase!: pulumi.Output<string>;
    public readonly tags!: pulumi.Output<{[key: string]: string} | undefined>;

    /**
     * Create a DatalakeAzureDatalake resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: DatalakeAzureDatalakeArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: DatalakeAzureDatalakeArgs | DatalakeAzureDatalakeState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as DatalakeAzureDatalakeState | undefined;
            resourceInputs["certificateExpirationState"] = state ? state.certificateExpirationState : undefined;
            resourceInputs["creationDate"] = state ? state.creationDate : undefined;
            resourceInputs["crn"] = state ? state.crn : undefined;
            resourceInputs["databaseType"] = state ? state.databaseType : undefined;
            resourceInputs["datalakeName"] = state ? state.datalakeName : undefined;
            resourceInputs["enableRangerRaz"] = state ? state.enableRangerRaz : undefined;
            resourceInputs["environmentCrn"] = state ? state.environmentCrn : undefined;
            resourceInputs["environmentName"] = state ? state.environmentName : undefined;
            resourceInputs["flexibleServerDelegatedSubnetId"] = state ? state.flexibleServerDelegatedSubnetId : undefined;
            resourceInputs["image"] = state ? state.image : undefined;
            resourceInputs["javaVersion"] = state ? state.javaVersion : undefined;
            resourceInputs["loadBalancerSku"] = state ? state.loadBalancerSku : undefined;
            resourceInputs["managedIdentity"] = state ? state.managedIdentity : undefined;
            resourceInputs["multiAz"] = state ? state.multiAz : undefined;
            resourceInputs["pollingOptions"] = state ? state.pollingOptions : undefined;
            resourceInputs["recipes"] = state ? state.recipes : undefined;
            resourceInputs["runtime"] = state ? state.runtime : undefined;
            resourceInputs["scale"] = state ? state.scale : undefined;
            resourceInputs["status"] = state ? state.status : undefined;
            resourceInputs["statusReason"] = state ? state.statusReason : undefined;
            resourceInputs["storageLocationBase"] = state ? state.storageLocationBase : undefined;
            resourceInputs["tags"] = state ? state.tags : undefined;
        } else {
            const args = argsOrState as DatalakeAzureDatalakeArgs | undefined;
            if ((!args || args.datalakeName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'datalakeName'");
            }
            if ((!args || args.environmentName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'environmentName'");
            }
            if ((!args || args.managedIdentity === undefined) && !opts.urn) {
                throw new Error("Missing required property 'managedIdentity'");
            }
            if ((!args || args.storageLocationBase === undefined) && !opts.urn) {
                throw new Error("Missing required property 'storageLocationBase'");
            }
            resourceInputs["databaseType"] = args ? args.databaseType : undefined;
            resourceInputs["datalakeName"] = args ? args.datalakeName : undefined;
            resourceInputs["enableRangerRaz"] = args ? args.enableRangerRaz : undefined;
            resourceInputs["environmentName"] = args ? args.environmentName : undefined;
            resourceInputs["flexibleServerDelegatedSubnetId"] = args ? args.flexibleServerDelegatedSubnetId : undefined;
            resourceInputs["image"] = args ? args.image : undefined;
            resourceInputs["javaVersion"] = args ? args.javaVersion : undefined;
            resourceInputs["loadBalancerSku"] = args ? args.loadBalancerSku : undefined;
            resourceInputs["managedIdentity"] = args ? args.managedIdentity : undefined;
            resourceInputs["multiAz"] = args ? args.multiAz : undefined;
            resourceInputs["pollingOptions"] = args ? args.pollingOptions : undefined;
            resourceInputs["recipes"] = args ? args.recipes : undefined;
            resourceInputs["runtime"] = args ? args.runtime : undefined;
            resourceInputs["scale"] = args ? args.scale : undefined;
            resourceInputs["storageLocationBase"] = args ? args.storageLocationBase : undefined;
            resourceInputs["tags"] = args ? args.tags : undefined;
            resourceInputs["certificateExpirationState"] = undefined /*out*/;
            resourceInputs["creationDate"] = undefined /*out*/;
            resourceInputs["crn"] = undefined /*out*/;
            resourceInputs["environmentCrn"] = undefined /*out*/;
            resourceInputs["status"] = undefined /*out*/;
            resourceInputs["statusReason"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(DatalakeAzureDatalake.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering DatalakeAzureDatalake resources.
 */
export interface DatalakeAzureDatalakeState {
    certificateExpirationState?: pulumi.Input<string>;
    creationDate?: pulumi.Input<string>;
    crn?: pulumi.Input<string>;
    /**
     * The type of the azure database. FLEXIBLE_SERVER is the next generation managed PostgreSQL service in Azure that provides
     * maximum flexibility over your database, built-in cost-optimizations. SINGLE_SERVER is a fully managed database service
     * with minimal requirements for customizations of the database.
     */
    databaseType?: pulumi.Input<string>;
    datalakeName?: pulumi.Input<string>;
    enableRangerRaz?: pulumi.Input<boolean>;
    environmentCrn?: pulumi.Input<string>;
    environmentName?: pulumi.Input<string>;
    /**
     * This argument allows you to specify the subnet ID for the subnet within which you want to configure your Azure Flexible
     * Server.
     */
    flexibleServerDelegatedSubnetId?: pulumi.Input<string>;
    image?: pulumi.Input<inputs.DatalakeAzureDatalakeImage>;
    javaVersion?: pulumi.Input<number>;
    /**
     * Represents the Azure load balancer SKU type. The current default is BASIC. To disable the load balancer, use type NONE.
     * Possible values: BASIC, STANDARD, NONE
     */
    loadBalancerSku?: pulumi.Input<string>;
    managedIdentity?: pulumi.Input<string>;
    /**
     * Creates CDP datalake distributed across multiple availability zones in an Azure region.
     */
    multiAz?: pulumi.Input<boolean>;
    /**
     * Polling related configuration options that could specify various values that will be used during CDP resource creation.
     */
    pollingOptions?: pulumi.Input<inputs.DatalakeAzureDatalakePollingOptions>;
    recipes?: pulumi.Input<pulumi.Input<inputs.DatalakeAzureDatalakeRecipe>[]>;
    runtime?: pulumi.Input<string>;
    scale?: pulumi.Input<string>;
    status?: pulumi.Input<string>;
    statusReason?: pulumi.Input<string>;
    storageLocationBase?: pulumi.Input<string>;
    tags?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
}

/**
 * The set of arguments for constructing a DatalakeAzureDatalake resource.
 */
export interface DatalakeAzureDatalakeArgs {
    /**
     * The type of the azure database. FLEXIBLE_SERVER is the next generation managed PostgreSQL service in Azure that provides
     * maximum flexibility over your database, built-in cost-optimizations. SINGLE_SERVER is a fully managed database service
     * with minimal requirements for customizations of the database.
     */
    databaseType?: pulumi.Input<string>;
    datalakeName: pulumi.Input<string>;
    enableRangerRaz?: pulumi.Input<boolean>;
    environmentName: pulumi.Input<string>;
    /**
     * This argument allows you to specify the subnet ID for the subnet within which you want to configure your Azure Flexible
     * Server.
     */
    flexibleServerDelegatedSubnetId?: pulumi.Input<string>;
    image?: pulumi.Input<inputs.DatalakeAzureDatalakeImage>;
    javaVersion?: pulumi.Input<number>;
    /**
     * Represents the Azure load balancer SKU type. The current default is BASIC. To disable the load balancer, use type NONE.
     * Possible values: BASIC, STANDARD, NONE
     */
    loadBalancerSku?: pulumi.Input<string>;
    managedIdentity: pulumi.Input<string>;
    /**
     * Creates CDP datalake distributed across multiple availability zones in an Azure region.
     */
    multiAz?: pulumi.Input<boolean>;
    /**
     * Polling related configuration options that could specify various values that will be used during CDP resource creation.
     */
    pollingOptions?: pulumi.Input<inputs.DatalakeAzureDatalakePollingOptions>;
    recipes?: pulumi.Input<pulumi.Input<inputs.DatalakeAzureDatalakeRecipe>[]>;
    runtime?: pulumi.Input<string>;
    scale?: pulumi.Input<string>;
    storageLocationBase: pulumi.Input<string>;
    tags?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
}
