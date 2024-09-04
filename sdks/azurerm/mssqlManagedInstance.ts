// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export class MssqlManagedInstance extends pulumi.CustomResource {
    /**
     * Get an existing MssqlManagedInstance resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: MssqlManagedInstanceState, opts?: pulumi.CustomResourceOptions): MssqlManagedInstance {
        return new MssqlManagedInstance(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azurerm:index/mssqlManagedInstance:MssqlManagedInstance';

    /**
     * Returns true if the given object is an instance of MssqlManagedInstance.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is MssqlManagedInstance {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === MssqlManagedInstance.__pulumiType;
    }

    public readonly administratorLogin!: pulumi.Output<string>;
    public readonly administratorLoginPassword!: pulumi.Output<string>;
    public readonly collation!: pulumi.Output<string | undefined>;
    public /*out*/ readonly dnsZone!: pulumi.Output<string>;
    public readonly dnsZonePartnerId!: pulumi.Output<string | undefined>;
    public /*out*/ readonly fqdn!: pulumi.Output<string>;
    public readonly identity!: pulumi.Output<outputs.MssqlManagedInstanceIdentity | undefined>;
    public readonly licenseType!: pulumi.Output<string>;
    public readonly location!: pulumi.Output<string>;
    public readonly maintenanceConfigurationName!: pulumi.Output<string | undefined>;
    public readonly minimumTlsVersion!: pulumi.Output<string | undefined>;
    public readonly name!: pulumi.Output<string>;
    public readonly proxyOverride!: pulumi.Output<string | undefined>;
    public readonly publicDataEndpointEnabled!: pulumi.Output<boolean | undefined>;
    public readonly resourceGroupName!: pulumi.Output<string>;
    public readonly skuName!: pulumi.Output<string>;
    public readonly storageAccountType!: pulumi.Output<string | undefined>;
    public readonly storageSizeInGb!: pulumi.Output<number>;
    public readonly subnetId!: pulumi.Output<string>;
    public readonly tags!: pulumi.Output<{[key: string]: string} | undefined>;
    public readonly timeouts!: pulumi.Output<outputs.MssqlManagedInstanceTimeouts | undefined>;
    public readonly timezoneId!: pulumi.Output<string | undefined>;
    public readonly vcores!: pulumi.Output<number>;
    public readonly zoneRedundantEnabled!: pulumi.Output<boolean | undefined>;

    /**
     * Create a MssqlManagedInstance resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: MssqlManagedInstanceArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: MssqlManagedInstanceArgs | MssqlManagedInstanceState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as MssqlManagedInstanceState | undefined;
            resourceInputs["administratorLogin"] = state ? state.administratorLogin : undefined;
            resourceInputs["administratorLoginPassword"] = state ? state.administratorLoginPassword : undefined;
            resourceInputs["collation"] = state ? state.collation : undefined;
            resourceInputs["dnsZone"] = state ? state.dnsZone : undefined;
            resourceInputs["dnsZonePartnerId"] = state ? state.dnsZonePartnerId : undefined;
            resourceInputs["fqdn"] = state ? state.fqdn : undefined;
            resourceInputs["identity"] = state ? state.identity : undefined;
            resourceInputs["licenseType"] = state ? state.licenseType : undefined;
            resourceInputs["location"] = state ? state.location : undefined;
            resourceInputs["maintenanceConfigurationName"] = state ? state.maintenanceConfigurationName : undefined;
            resourceInputs["minimumTlsVersion"] = state ? state.minimumTlsVersion : undefined;
            resourceInputs["name"] = state ? state.name : undefined;
            resourceInputs["proxyOverride"] = state ? state.proxyOverride : undefined;
            resourceInputs["publicDataEndpointEnabled"] = state ? state.publicDataEndpointEnabled : undefined;
            resourceInputs["resourceGroupName"] = state ? state.resourceGroupName : undefined;
            resourceInputs["skuName"] = state ? state.skuName : undefined;
            resourceInputs["storageAccountType"] = state ? state.storageAccountType : undefined;
            resourceInputs["storageSizeInGb"] = state ? state.storageSizeInGb : undefined;
            resourceInputs["subnetId"] = state ? state.subnetId : undefined;
            resourceInputs["tags"] = state ? state.tags : undefined;
            resourceInputs["timeouts"] = state ? state.timeouts : undefined;
            resourceInputs["timezoneId"] = state ? state.timezoneId : undefined;
            resourceInputs["vcores"] = state ? state.vcores : undefined;
            resourceInputs["zoneRedundantEnabled"] = state ? state.zoneRedundantEnabled : undefined;
        } else {
            const args = argsOrState as MssqlManagedInstanceArgs | undefined;
            if ((!args || args.administratorLogin === undefined) && !opts.urn) {
                throw new Error("Missing required property 'administratorLogin'");
            }
            if ((!args || args.administratorLoginPassword === undefined) && !opts.urn) {
                throw new Error("Missing required property 'administratorLoginPassword'");
            }
            if ((!args || args.licenseType === undefined) && !opts.urn) {
                throw new Error("Missing required property 'licenseType'");
            }
            if ((!args || args.location === undefined) && !opts.urn) {
                throw new Error("Missing required property 'location'");
            }
            if ((!args || args.resourceGroupName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'resourceGroupName'");
            }
            if ((!args || args.skuName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'skuName'");
            }
            if ((!args || args.storageSizeInGb === undefined) && !opts.urn) {
                throw new Error("Missing required property 'storageSizeInGb'");
            }
            if ((!args || args.subnetId === undefined) && !opts.urn) {
                throw new Error("Missing required property 'subnetId'");
            }
            if ((!args || args.vcores === undefined) && !opts.urn) {
                throw new Error("Missing required property 'vcores'");
            }
            resourceInputs["administratorLogin"] = args ? args.administratorLogin : undefined;
            resourceInputs["administratorLoginPassword"] = args?.administratorLoginPassword ? pulumi.secret(args.administratorLoginPassword) : undefined;
            resourceInputs["collation"] = args ? args.collation : undefined;
            resourceInputs["dnsZonePartnerId"] = args ? args.dnsZonePartnerId : undefined;
            resourceInputs["identity"] = args ? args.identity : undefined;
            resourceInputs["licenseType"] = args ? args.licenseType : undefined;
            resourceInputs["location"] = args ? args.location : undefined;
            resourceInputs["maintenanceConfigurationName"] = args ? args.maintenanceConfigurationName : undefined;
            resourceInputs["minimumTlsVersion"] = args ? args.minimumTlsVersion : undefined;
            resourceInputs["name"] = args ? args.name : undefined;
            resourceInputs["proxyOverride"] = args ? args.proxyOverride : undefined;
            resourceInputs["publicDataEndpointEnabled"] = args ? args.publicDataEndpointEnabled : undefined;
            resourceInputs["resourceGroupName"] = args ? args.resourceGroupName : undefined;
            resourceInputs["skuName"] = args ? args.skuName : undefined;
            resourceInputs["storageAccountType"] = args ? args.storageAccountType : undefined;
            resourceInputs["storageSizeInGb"] = args ? args.storageSizeInGb : undefined;
            resourceInputs["subnetId"] = args ? args.subnetId : undefined;
            resourceInputs["tags"] = args ? args.tags : undefined;
            resourceInputs["timeouts"] = args ? args.timeouts : undefined;
            resourceInputs["timezoneId"] = args ? args.timezoneId : undefined;
            resourceInputs["vcores"] = args ? args.vcores : undefined;
            resourceInputs["zoneRedundantEnabled"] = args ? args.zoneRedundantEnabled : undefined;
            resourceInputs["dnsZone"] = undefined /*out*/;
            resourceInputs["fqdn"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const secretOpts = { additionalSecretOutputs: ["administratorLoginPassword"] };
        opts = pulumi.mergeOptions(opts, secretOpts);
        super(MssqlManagedInstance.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering MssqlManagedInstance resources.
 */
export interface MssqlManagedInstanceState {
    administratorLogin?: pulumi.Input<string>;
    administratorLoginPassword?: pulumi.Input<string>;
    collation?: pulumi.Input<string>;
    dnsZone?: pulumi.Input<string>;
    dnsZonePartnerId?: pulumi.Input<string>;
    fqdn?: pulumi.Input<string>;
    identity?: pulumi.Input<inputs.MssqlManagedInstanceIdentity>;
    licenseType?: pulumi.Input<string>;
    location?: pulumi.Input<string>;
    maintenanceConfigurationName?: pulumi.Input<string>;
    minimumTlsVersion?: pulumi.Input<string>;
    name?: pulumi.Input<string>;
    proxyOverride?: pulumi.Input<string>;
    publicDataEndpointEnabled?: pulumi.Input<boolean>;
    resourceGroupName?: pulumi.Input<string>;
    skuName?: pulumi.Input<string>;
    storageAccountType?: pulumi.Input<string>;
    storageSizeInGb?: pulumi.Input<number>;
    subnetId?: pulumi.Input<string>;
    tags?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    timeouts?: pulumi.Input<inputs.MssqlManagedInstanceTimeouts>;
    timezoneId?: pulumi.Input<string>;
    vcores?: pulumi.Input<number>;
    zoneRedundantEnabled?: pulumi.Input<boolean>;
}

/**
 * The set of arguments for constructing a MssqlManagedInstance resource.
 */
export interface MssqlManagedInstanceArgs {
    administratorLogin: pulumi.Input<string>;
    administratorLoginPassword: pulumi.Input<string>;
    collation?: pulumi.Input<string>;
    dnsZonePartnerId?: pulumi.Input<string>;
    identity?: pulumi.Input<inputs.MssqlManagedInstanceIdentity>;
    licenseType: pulumi.Input<string>;
    location: pulumi.Input<string>;
    maintenanceConfigurationName?: pulumi.Input<string>;
    minimumTlsVersion?: pulumi.Input<string>;
    name?: pulumi.Input<string>;
    proxyOverride?: pulumi.Input<string>;
    publicDataEndpointEnabled?: pulumi.Input<boolean>;
    resourceGroupName: pulumi.Input<string>;
    skuName: pulumi.Input<string>;
    storageAccountType?: pulumi.Input<string>;
    storageSizeInGb: pulumi.Input<number>;
    subnetId: pulumi.Input<string>;
    tags?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    timeouts?: pulumi.Input<inputs.MssqlManagedInstanceTimeouts>;
    timezoneId?: pulumi.Input<string>;
    vcores: pulumi.Input<number>;
    zoneRedundantEnabled?: pulumi.Input<boolean>;
}
