// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export class CloudAccount extends pulumi.CustomResource {
    /**
     * Get an existing CloudAccount resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: CloudAccountState, opts?: pulumi.CustomResourceOptions): CloudAccount {
        return new CloudAccount(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'ciscomcd:index/cloudAccount:CloudAccount';

    /**
     * Returns true if the given object is an instance of CloudAccount.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is CloudAccount {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === CloudAccount.__pulumiType;
    }

    public readonly awsAccessKeyId!: pulumi.Output<string | undefined>;
    public readonly awsAccessSecret!: pulumi.Output<string | undefined>;
    public readonly awsAccountNumber!: pulumi.Output<string | undefined>;
    public readonly awsCredentialsType!: pulumi.Output<string | undefined>;
    public readonly awsIamRole!: pulumi.Output<string | undefined>;
    public readonly awsIamRoleExternalId!: pulumi.Output<string | undefined>;
    public readonly awsInventoryIamRole!: pulumi.Output<string | undefined>;
    public readonly azureApplicationId!: pulumi.Output<string | undefined>;
    public readonly azureClientSecret!: pulumi.Output<string | undefined>;
    public readonly azureDirectoryId!: pulumi.Output<string | undefined>;
    public readonly azureSubscriptionId!: pulumi.Output<string | undefined>;
    public readonly cspType!: pulumi.Output<string>;
    public readonly description!: pulumi.Output<string | undefined>;
    public readonly gcpCredentialsFile!: pulumi.Output<string | undefined>;
    public readonly gcpFolderId!: pulumi.Output<string | undefined>;
    public readonly gcpProjectId!: pulumi.Output<string>;
    public readonly inventoryMonitorings!: pulumi.Output<outputs.CloudAccountInventoryMonitoring[] | undefined>;
    public readonly name!: pulumi.Output<string>;
    public readonly privateKey!: pulumi.Output<string | undefined>;
    public readonly tenantOcid!: pulumi.Output<string | undefined>;
    public readonly userOcid!: pulumi.Output<string | undefined>;

    /**
     * Create a CloudAccount resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: CloudAccountArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: CloudAccountArgs | CloudAccountState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as CloudAccountState | undefined;
            resourceInputs["awsAccessKeyId"] = state ? state.awsAccessKeyId : undefined;
            resourceInputs["awsAccessSecret"] = state ? state.awsAccessSecret : undefined;
            resourceInputs["awsAccountNumber"] = state ? state.awsAccountNumber : undefined;
            resourceInputs["awsCredentialsType"] = state ? state.awsCredentialsType : undefined;
            resourceInputs["awsIamRole"] = state ? state.awsIamRole : undefined;
            resourceInputs["awsIamRoleExternalId"] = state ? state.awsIamRoleExternalId : undefined;
            resourceInputs["awsInventoryIamRole"] = state ? state.awsInventoryIamRole : undefined;
            resourceInputs["azureApplicationId"] = state ? state.azureApplicationId : undefined;
            resourceInputs["azureClientSecret"] = state ? state.azureClientSecret : undefined;
            resourceInputs["azureDirectoryId"] = state ? state.azureDirectoryId : undefined;
            resourceInputs["azureSubscriptionId"] = state ? state.azureSubscriptionId : undefined;
            resourceInputs["cspType"] = state ? state.cspType : undefined;
            resourceInputs["description"] = state ? state.description : undefined;
            resourceInputs["gcpCredentialsFile"] = state ? state.gcpCredentialsFile : undefined;
            resourceInputs["gcpFolderId"] = state ? state.gcpFolderId : undefined;
            resourceInputs["gcpProjectId"] = state ? state.gcpProjectId : undefined;
            resourceInputs["inventoryMonitorings"] = state ? state.inventoryMonitorings : undefined;
            resourceInputs["name"] = state ? state.name : undefined;
            resourceInputs["privateKey"] = state ? state.privateKey : undefined;
            resourceInputs["tenantOcid"] = state ? state.tenantOcid : undefined;
            resourceInputs["userOcid"] = state ? state.userOcid : undefined;
        } else {
            const args = argsOrState as CloudAccountArgs | undefined;
            if ((!args || args.cspType === undefined) && !opts.urn) {
                throw new Error("Missing required property 'cspType'");
            }
            resourceInputs["awsAccessKeyId"] = args ? args.awsAccessKeyId : undefined;
            resourceInputs["awsAccessSecret"] = args ? args.awsAccessSecret : undefined;
            resourceInputs["awsAccountNumber"] = args ? args.awsAccountNumber : undefined;
            resourceInputs["awsCredentialsType"] = args ? args.awsCredentialsType : undefined;
            resourceInputs["awsIamRole"] = args ? args.awsIamRole : undefined;
            resourceInputs["awsIamRoleExternalId"] = args ? args.awsIamRoleExternalId : undefined;
            resourceInputs["awsInventoryIamRole"] = args ? args.awsInventoryIamRole : undefined;
            resourceInputs["azureApplicationId"] = args ? args.azureApplicationId : undefined;
            resourceInputs["azureClientSecret"] = args ? args.azureClientSecret : undefined;
            resourceInputs["azureDirectoryId"] = args ? args.azureDirectoryId : undefined;
            resourceInputs["azureSubscriptionId"] = args ? args.azureSubscriptionId : undefined;
            resourceInputs["cspType"] = args ? args.cspType : undefined;
            resourceInputs["description"] = args ? args.description : undefined;
            resourceInputs["gcpCredentialsFile"] = args ? args.gcpCredentialsFile : undefined;
            resourceInputs["gcpFolderId"] = args ? args.gcpFolderId : undefined;
            resourceInputs["gcpProjectId"] = args ? args.gcpProjectId : undefined;
            resourceInputs["inventoryMonitorings"] = args ? args.inventoryMonitorings : undefined;
            resourceInputs["name"] = args ? args.name : undefined;
            resourceInputs["privateKey"] = args ? args.privateKey : undefined;
            resourceInputs["tenantOcid"] = args ? args.tenantOcid : undefined;
            resourceInputs["userOcid"] = args ? args.userOcid : undefined;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(CloudAccount.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering CloudAccount resources.
 */
export interface CloudAccountState {
    awsAccessKeyId?: pulumi.Input<string>;
    awsAccessSecret?: pulumi.Input<string>;
    awsAccountNumber?: pulumi.Input<string>;
    awsCredentialsType?: pulumi.Input<string>;
    awsIamRole?: pulumi.Input<string>;
    awsIamRoleExternalId?: pulumi.Input<string>;
    awsInventoryIamRole?: pulumi.Input<string>;
    azureApplicationId?: pulumi.Input<string>;
    azureClientSecret?: pulumi.Input<string>;
    azureDirectoryId?: pulumi.Input<string>;
    azureSubscriptionId?: pulumi.Input<string>;
    cspType?: pulumi.Input<string>;
    description?: pulumi.Input<string>;
    gcpCredentialsFile?: pulumi.Input<string>;
    gcpFolderId?: pulumi.Input<string>;
    gcpProjectId?: pulumi.Input<string>;
    inventoryMonitorings?: pulumi.Input<pulumi.Input<inputs.CloudAccountInventoryMonitoring>[]>;
    name?: pulumi.Input<string>;
    privateKey?: pulumi.Input<string>;
    tenantOcid?: pulumi.Input<string>;
    userOcid?: pulumi.Input<string>;
}

/**
 * The set of arguments for constructing a CloudAccount resource.
 */
export interface CloudAccountArgs {
    awsAccessKeyId?: pulumi.Input<string>;
    awsAccessSecret?: pulumi.Input<string>;
    awsAccountNumber?: pulumi.Input<string>;
    awsCredentialsType?: pulumi.Input<string>;
    awsIamRole?: pulumi.Input<string>;
    awsIamRoleExternalId?: pulumi.Input<string>;
    awsInventoryIamRole?: pulumi.Input<string>;
    azureApplicationId?: pulumi.Input<string>;
    azureClientSecret?: pulumi.Input<string>;
    azureDirectoryId?: pulumi.Input<string>;
    azureSubscriptionId?: pulumi.Input<string>;
    cspType: pulumi.Input<string>;
    description?: pulumi.Input<string>;
    gcpCredentialsFile?: pulumi.Input<string>;
    gcpFolderId?: pulumi.Input<string>;
    gcpProjectId?: pulumi.Input<string>;
    inventoryMonitorings?: pulumi.Input<pulumi.Input<inputs.CloudAccountInventoryMonitoring>[]>;
    name?: pulumi.Input<string>;
    privateKey?: pulumi.Input<string>;
    tenantOcid?: pulumi.Input<string>;
    userOcid?: pulumi.Input<string>;
}
