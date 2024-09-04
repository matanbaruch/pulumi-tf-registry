// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export class LicensemanagerLicense extends pulumi.CustomResource {
    /**
     * Get an existing LicensemanagerLicense resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: LicensemanagerLicenseState, opts?: pulumi.CustomResourceOptions): LicensemanagerLicense {
        return new LicensemanagerLicense(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'awscc:index/licensemanagerLicense:LicensemanagerLicense';

    /**
     * Returns true if the given object is an instance of LicensemanagerLicense.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is LicensemanagerLicense {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === LicensemanagerLicense.__pulumiType;
    }

    /**
     * Beneficiary of the license.
     */
    public readonly beneficiary!: pulumi.Output<string>;
    public readonly consumptionConfiguration!: pulumi.Output<outputs.LicensemanagerLicenseConsumptionConfiguration>;
    public readonly entitlements!: pulumi.Output<outputs.LicensemanagerLicenseEntitlement[]>;
    /**
     * Home region for the created license.
     */
    public readonly homeRegion!: pulumi.Output<string>;
    public readonly issuer!: pulumi.Output<outputs.LicensemanagerLicenseIssuer>;
    /**
     * Amazon Resource Name is a unique name for each resource.
     */
    public /*out*/ readonly licenseArn!: pulumi.Output<string>;
    public readonly licenseMetadatas!: pulumi.Output<outputs.LicensemanagerLicenseLicenseMetadata[]>;
    /**
     * Name for the created license.
     */
    public readonly licenseName!: pulumi.Output<string>;
    /**
     * Product name for the created license.
     */
    public readonly productName!: pulumi.Output<string>;
    /**
     * ProductSKU of the license.
     */
    public readonly productSku!: pulumi.Output<string>;
    public readonly status!: pulumi.Output<string>;
    public readonly validity!: pulumi.Output<outputs.LicensemanagerLicenseValidity>;
    /**
     * The version of the license.
     */
    public /*out*/ readonly version!: pulumi.Output<string>;

    /**
     * Create a LicensemanagerLicense resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: LicensemanagerLicenseArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: LicensemanagerLicenseArgs | LicensemanagerLicenseState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as LicensemanagerLicenseState | undefined;
            resourceInputs["beneficiary"] = state ? state.beneficiary : undefined;
            resourceInputs["consumptionConfiguration"] = state ? state.consumptionConfiguration : undefined;
            resourceInputs["entitlements"] = state ? state.entitlements : undefined;
            resourceInputs["homeRegion"] = state ? state.homeRegion : undefined;
            resourceInputs["issuer"] = state ? state.issuer : undefined;
            resourceInputs["licenseArn"] = state ? state.licenseArn : undefined;
            resourceInputs["licenseMetadatas"] = state ? state.licenseMetadatas : undefined;
            resourceInputs["licenseName"] = state ? state.licenseName : undefined;
            resourceInputs["productName"] = state ? state.productName : undefined;
            resourceInputs["productSku"] = state ? state.productSku : undefined;
            resourceInputs["status"] = state ? state.status : undefined;
            resourceInputs["validity"] = state ? state.validity : undefined;
            resourceInputs["version"] = state ? state.version : undefined;
        } else {
            const args = argsOrState as LicensemanagerLicenseArgs | undefined;
            if ((!args || args.consumptionConfiguration === undefined) && !opts.urn) {
                throw new Error("Missing required property 'consumptionConfiguration'");
            }
            if ((!args || args.entitlements === undefined) && !opts.urn) {
                throw new Error("Missing required property 'entitlements'");
            }
            if ((!args || args.homeRegion === undefined) && !opts.urn) {
                throw new Error("Missing required property 'homeRegion'");
            }
            if ((!args || args.issuer === undefined) && !opts.urn) {
                throw new Error("Missing required property 'issuer'");
            }
            if ((!args || args.licenseName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'licenseName'");
            }
            if ((!args || args.productName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'productName'");
            }
            if ((!args || args.validity === undefined) && !opts.urn) {
                throw new Error("Missing required property 'validity'");
            }
            resourceInputs["beneficiary"] = args ? args.beneficiary : undefined;
            resourceInputs["consumptionConfiguration"] = args ? args.consumptionConfiguration : undefined;
            resourceInputs["entitlements"] = args ? args.entitlements : undefined;
            resourceInputs["homeRegion"] = args ? args.homeRegion : undefined;
            resourceInputs["issuer"] = args ? args.issuer : undefined;
            resourceInputs["licenseMetadatas"] = args ? args.licenseMetadatas : undefined;
            resourceInputs["licenseName"] = args ? args.licenseName : undefined;
            resourceInputs["productName"] = args ? args.productName : undefined;
            resourceInputs["productSku"] = args ? args.productSku : undefined;
            resourceInputs["status"] = args ? args.status : undefined;
            resourceInputs["validity"] = args ? args.validity : undefined;
            resourceInputs["licenseArn"] = undefined /*out*/;
            resourceInputs["version"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(LicensemanagerLicense.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering LicensemanagerLicense resources.
 */
export interface LicensemanagerLicenseState {
    /**
     * Beneficiary of the license.
     */
    beneficiary?: pulumi.Input<string>;
    consumptionConfiguration?: pulumi.Input<inputs.LicensemanagerLicenseConsumptionConfiguration>;
    entitlements?: pulumi.Input<pulumi.Input<inputs.LicensemanagerLicenseEntitlement>[]>;
    /**
     * Home region for the created license.
     */
    homeRegion?: pulumi.Input<string>;
    issuer?: pulumi.Input<inputs.LicensemanagerLicenseIssuer>;
    /**
     * Amazon Resource Name is a unique name for each resource.
     */
    licenseArn?: pulumi.Input<string>;
    licenseMetadatas?: pulumi.Input<pulumi.Input<inputs.LicensemanagerLicenseLicenseMetadata>[]>;
    /**
     * Name for the created license.
     */
    licenseName?: pulumi.Input<string>;
    /**
     * Product name for the created license.
     */
    productName?: pulumi.Input<string>;
    /**
     * ProductSKU of the license.
     */
    productSku?: pulumi.Input<string>;
    status?: pulumi.Input<string>;
    validity?: pulumi.Input<inputs.LicensemanagerLicenseValidity>;
    /**
     * The version of the license.
     */
    version?: pulumi.Input<string>;
}

/**
 * The set of arguments for constructing a LicensemanagerLicense resource.
 */
export interface LicensemanagerLicenseArgs {
    /**
     * Beneficiary of the license.
     */
    beneficiary?: pulumi.Input<string>;
    consumptionConfiguration: pulumi.Input<inputs.LicensemanagerLicenseConsumptionConfiguration>;
    entitlements: pulumi.Input<pulumi.Input<inputs.LicensemanagerLicenseEntitlement>[]>;
    /**
     * Home region for the created license.
     */
    homeRegion: pulumi.Input<string>;
    issuer: pulumi.Input<inputs.LicensemanagerLicenseIssuer>;
    licenseMetadatas?: pulumi.Input<pulumi.Input<inputs.LicensemanagerLicenseLicenseMetadata>[]>;
    /**
     * Name for the created license.
     */
    licenseName: pulumi.Input<string>;
    /**
     * Product name for the created license.
     */
    productName: pulumi.Input<string>;
    /**
     * ProductSKU of the license.
     */
    productSku?: pulumi.Input<string>;
    status?: pulumi.Input<string>;
    validity: pulumi.Input<inputs.LicensemanagerLicenseValidity>;
}
