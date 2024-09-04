// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export class DataFactoryIntegrationRuntimeAzureSsis extends pulumi.CustomResource {
    /**
     * Get an existing DataFactoryIntegrationRuntimeAzureSsis resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: DataFactoryIntegrationRuntimeAzureSsisState, opts?: pulumi.CustomResourceOptions): DataFactoryIntegrationRuntimeAzureSsis {
        return new DataFactoryIntegrationRuntimeAzureSsis(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azurerm:index/dataFactoryIntegrationRuntimeAzureSsis:DataFactoryIntegrationRuntimeAzureSsis';

    /**
     * Returns true if the given object is an instance of DataFactoryIntegrationRuntimeAzureSsis.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is DataFactoryIntegrationRuntimeAzureSsis {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === DataFactoryIntegrationRuntimeAzureSsis.__pulumiType;
    }

    public readonly catalogInfo!: pulumi.Output<outputs.DataFactoryIntegrationRuntimeAzureSsisCatalogInfo | undefined>;
    public readonly copyComputeScale!: pulumi.Output<outputs.DataFactoryIntegrationRuntimeAzureSsisCopyComputeScale | undefined>;
    public readonly credentialName!: pulumi.Output<string | undefined>;
    public readonly customSetupScript!: pulumi.Output<outputs.DataFactoryIntegrationRuntimeAzureSsisCustomSetupScript | undefined>;
    public readonly dataFactoryId!: pulumi.Output<string>;
    public readonly description!: pulumi.Output<string | undefined>;
    public readonly edition!: pulumi.Output<string | undefined>;
    public readonly expressCustomSetup!: pulumi.Output<outputs.DataFactoryIntegrationRuntimeAzureSsisExpressCustomSetup | undefined>;
    public readonly expressVnetIntegration!: pulumi.Output<outputs.DataFactoryIntegrationRuntimeAzureSsisExpressVnetIntegration | undefined>;
    public readonly licenseType!: pulumi.Output<string | undefined>;
    public readonly location!: pulumi.Output<string>;
    public readonly maxParallelExecutionsPerNode!: pulumi.Output<number | undefined>;
    public readonly name!: pulumi.Output<string>;
    public readonly nodeSize!: pulumi.Output<string>;
    public readonly numberOfNodes!: pulumi.Output<number | undefined>;
    public readonly packageStores!: pulumi.Output<outputs.DataFactoryIntegrationRuntimeAzureSsisPackageStore[] | undefined>;
    public readonly pipelineExternalComputeScale!: pulumi.Output<outputs.DataFactoryIntegrationRuntimeAzureSsisPipelineExternalComputeScale | undefined>;
    public readonly proxy!: pulumi.Output<outputs.DataFactoryIntegrationRuntimeAzureSsisProxy | undefined>;
    public readonly timeouts!: pulumi.Output<outputs.DataFactoryIntegrationRuntimeAzureSsisTimeouts | undefined>;
    public readonly vnetIntegration!: pulumi.Output<outputs.DataFactoryIntegrationRuntimeAzureSsisVnetIntegration | undefined>;

    /**
     * Create a DataFactoryIntegrationRuntimeAzureSsis resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: DataFactoryIntegrationRuntimeAzureSsisArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: DataFactoryIntegrationRuntimeAzureSsisArgs | DataFactoryIntegrationRuntimeAzureSsisState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as DataFactoryIntegrationRuntimeAzureSsisState | undefined;
            resourceInputs["catalogInfo"] = state ? state.catalogInfo : undefined;
            resourceInputs["copyComputeScale"] = state ? state.copyComputeScale : undefined;
            resourceInputs["credentialName"] = state ? state.credentialName : undefined;
            resourceInputs["customSetupScript"] = state ? state.customSetupScript : undefined;
            resourceInputs["dataFactoryId"] = state ? state.dataFactoryId : undefined;
            resourceInputs["description"] = state ? state.description : undefined;
            resourceInputs["edition"] = state ? state.edition : undefined;
            resourceInputs["expressCustomSetup"] = state ? state.expressCustomSetup : undefined;
            resourceInputs["expressVnetIntegration"] = state ? state.expressVnetIntegration : undefined;
            resourceInputs["licenseType"] = state ? state.licenseType : undefined;
            resourceInputs["location"] = state ? state.location : undefined;
            resourceInputs["maxParallelExecutionsPerNode"] = state ? state.maxParallelExecutionsPerNode : undefined;
            resourceInputs["name"] = state ? state.name : undefined;
            resourceInputs["nodeSize"] = state ? state.nodeSize : undefined;
            resourceInputs["numberOfNodes"] = state ? state.numberOfNodes : undefined;
            resourceInputs["packageStores"] = state ? state.packageStores : undefined;
            resourceInputs["pipelineExternalComputeScale"] = state ? state.pipelineExternalComputeScale : undefined;
            resourceInputs["proxy"] = state ? state.proxy : undefined;
            resourceInputs["timeouts"] = state ? state.timeouts : undefined;
            resourceInputs["vnetIntegration"] = state ? state.vnetIntegration : undefined;
        } else {
            const args = argsOrState as DataFactoryIntegrationRuntimeAzureSsisArgs | undefined;
            if ((!args || args.dataFactoryId === undefined) && !opts.urn) {
                throw new Error("Missing required property 'dataFactoryId'");
            }
            if ((!args || args.location === undefined) && !opts.urn) {
                throw new Error("Missing required property 'location'");
            }
            if ((!args || args.nodeSize === undefined) && !opts.urn) {
                throw new Error("Missing required property 'nodeSize'");
            }
            resourceInputs["catalogInfo"] = args ? args.catalogInfo : undefined;
            resourceInputs["copyComputeScale"] = args ? args.copyComputeScale : undefined;
            resourceInputs["credentialName"] = args ? args.credentialName : undefined;
            resourceInputs["customSetupScript"] = args ? args.customSetupScript : undefined;
            resourceInputs["dataFactoryId"] = args ? args.dataFactoryId : undefined;
            resourceInputs["description"] = args ? args.description : undefined;
            resourceInputs["edition"] = args ? args.edition : undefined;
            resourceInputs["expressCustomSetup"] = args ? args.expressCustomSetup : undefined;
            resourceInputs["expressVnetIntegration"] = args ? args.expressVnetIntegration : undefined;
            resourceInputs["licenseType"] = args ? args.licenseType : undefined;
            resourceInputs["location"] = args ? args.location : undefined;
            resourceInputs["maxParallelExecutionsPerNode"] = args ? args.maxParallelExecutionsPerNode : undefined;
            resourceInputs["name"] = args ? args.name : undefined;
            resourceInputs["nodeSize"] = args ? args.nodeSize : undefined;
            resourceInputs["numberOfNodes"] = args ? args.numberOfNodes : undefined;
            resourceInputs["packageStores"] = args ? args.packageStores : undefined;
            resourceInputs["pipelineExternalComputeScale"] = args ? args.pipelineExternalComputeScale : undefined;
            resourceInputs["proxy"] = args ? args.proxy : undefined;
            resourceInputs["timeouts"] = args ? args.timeouts : undefined;
            resourceInputs["vnetIntegration"] = args ? args.vnetIntegration : undefined;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(DataFactoryIntegrationRuntimeAzureSsis.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering DataFactoryIntegrationRuntimeAzureSsis resources.
 */
export interface DataFactoryIntegrationRuntimeAzureSsisState {
    catalogInfo?: pulumi.Input<inputs.DataFactoryIntegrationRuntimeAzureSsisCatalogInfo>;
    copyComputeScale?: pulumi.Input<inputs.DataFactoryIntegrationRuntimeAzureSsisCopyComputeScale>;
    credentialName?: pulumi.Input<string>;
    customSetupScript?: pulumi.Input<inputs.DataFactoryIntegrationRuntimeAzureSsisCustomSetupScript>;
    dataFactoryId?: pulumi.Input<string>;
    description?: pulumi.Input<string>;
    edition?: pulumi.Input<string>;
    expressCustomSetup?: pulumi.Input<inputs.DataFactoryIntegrationRuntimeAzureSsisExpressCustomSetup>;
    expressVnetIntegration?: pulumi.Input<inputs.DataFactoryIntegrationRuntimeAzureSsisExpressVnetIntegration>;
    licenseType?: pulumi.Input<string>;
    location?: pulumi.Input<string>;
    maxParallelExecutionsPerNode?: pulumi.Input<number>;
    name?: pulumi.Input<string>;
    nodeSize?: pulumi.Input<string>;
    numberOfNodes?: pulumi.Input<number>;
    packageStores?: pulumi.Input<pulumi.Input<inputs.DataFactoryIntegrationRuntimeAzureSsisPackageStore>[]>;
    pipelineExternalComputeScale?: pulumi.Input<inputs.DataFactoryIntegrationRuntimeAzureSsisPipelineExternalComputeScale>;
    proxy?: pulumi.Input<inputs.DataFactoryIntegrationRuntimeAzureSsisProxy>;
    timeouts?: pulumi.Input<inputs.DataFactoryIntegrationRuntimeAzureSsisTimeouts>;
    vnetIntegration?: pulumi.Input<inputs.DataFactoryIntegrationRuntimeAzureSsisVnetIntegration>;
}

/**
 * The set of arguments for constructing a DataFactoryIntegrationRuntimeAzureSsis resource.
 */
export interface DataFactoryIntegrationRuntimeAzureSsisArgs {
    catalogInfo?: pulumi.Input<inputs.DataFactoryIntegrationRuntimeAzureSsisCatalogInfo>;
    copyComputeScale?: pulumi.Input<inputs.DataFactoryIntegrationRuntimeAzureSsisCopyComputeScale>;
    credentialName?: pulumi.Input<string>;
    customSetupScript?: pulumi.Input<inputs.DataFactoryIntegrationRuntimeAzureSsisCustomSetupScript>;
    dataFactoryId: pulumi.Input<string>;
    description?: pulumi.Input<string>;
    edition?: pulumi.Input<string>;
    expressCustomSetup?: pulumi.Input<inputs.DataFactoryIntegrationRuntimeAzureSsisExpressCustomSetup>;
    expressVnetIntegration?: pulumi.Input<inputs.DataFactoryIntegrationRuntimeAzureSsisExpressVnetIntegration>;
    licenseType?: pulumi.Input<string>;
    location: pulumi.Input<string>;
    maxParallelExecutionsPerNode?: pulumi.Input<number>;
    name?: pulumi.Input<string>;
    nodeSize: pulumi.Input<string>;
    numberOfNodes?: pulumi.Input<number>;
    packageStores?: pulumi.Input<pulumi.Input<inputs.DataFactoryIntegrationRuntimeAzureSsisPackageStore>[]>;
    pipelineExternalComputeScale?: pulumi.Input<inputs.DataFactoryIntegrationRuntimeAzureSsisPipelineExternalComputeScale>;
    proxy?: pulumi.Input<inputs.DataFactoryIntegrationRuntimeAzureSsisProxy>;
    timeouts?: pulumi.Input<inputs.DataFactoryIntegrationRuntimeAzureSsisTimeouts>;
    vnetIntegration?: pulumi.Input<inputs.DataFactoryIntegrationRuntimeAzureSsisVnetIntegration>;
}
