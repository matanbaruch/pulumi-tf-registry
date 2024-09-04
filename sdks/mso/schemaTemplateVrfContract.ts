// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export class SchemaTemplateVrfContract extends pulumi.CustomResource {
    /**
     * Get an existing SchemaTemplateVrfContract resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: SchemaTemplateVrfContractState, opts?: pulumi.CustomResourceOptions): SchemaTemplateVrfContract {
        return new SchemaTemplateVrfContract(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'mso:index/schemaTemplateVrfContract:SchemaTemplateVrfContract';

    /**
     * Returns true if the given object is an instance of SchemaTemplateVrfContract.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is SchemaTemplateVrfContract {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === SchemaTemplateVrfContract.__pulumiType;
    }

    public readonly contractName!: pulumi.Output<string>;
    public readonly contractSchemaId!: pulumi.Output<string>;
    public readonly contractTemplateName!: pulumi.Output<string>;
    public readonly relationshipType!: pulumi.Output<string>;
    public readonly schemaId!: pulumi.Output<string>;
    public readonly templateName!: pulumi.Output<string>;
    public readonly vrfName!: pulumi.Output<string>;

    /**
     * Create a SchemaTemplateVrfContract resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: SchemaTemplateVrfContractArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: SchemaTemplateVrfContractArgs | SchemaTemplateVrfContractState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as SchemaTemplateVrfContractState | undefined;
            resourceInputs["contractName"] = state ? state.contractName : undefined;
            resourceInputs["contractSchemaId"] = state ? state.contractSchemaId : undefined;
            resourceInputs["contractTemplateName"] = state ? state.contractTemplateName : undefined;
            resourceInputs["relationshipType"] = state ? state.relationshipType : undefined;
            resourceInputs["schemaId"] = state ? state.schemaId : undefined;
            resourceInputs["templateName"] = state ? state.templateName : undefined;
            resourceInputs["vrfName"] = state ? state.vrfName : undefined;
        } else {
            const args = argsOrState as SchemaTemplateVrfContractArgs | undefined;
            if ((!args || args.contractName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'contractName'");
            }
            if ((!args || args.relationshipType === undefined) && !opts.urn) {
                throw new Error("Missing required property 'relationshipType'");
            }
            if ((!args || args.schemaId === undefined) && !opts.urn) {
                throw new Error("Missing required property 'schemaId'");
            }
            if ((!args || args.templateName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'templateName'");
            }
            if ((!args || args.vrfName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'vrfName'");
            }
            resourceInputs["contractName"] = args ? args.contractName : undefined;
            resourceInputs["contractSchemaId"] = args ? args.contractSchemaId : undefined;
            resourceInputs["contractTemplateName"] = args ? args.contractTemplateName : undefined;
            resourceInputs["relationshipType"] = args ? args.relationshipType : undefined;
            resourceInputs["schemaId"] = args ? args.schemaId : undefined;
            resourceInputs["templateName"] = args ? args.templateName : undefined;
            resourceInputs["vrfName"] = args ? args.vrfName : undefined;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(SchemaTemplateVrfContract.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering SchemaTemplateVrfContract resources.
 */
export interface SchemaTemplateVrfContractState {
    contractName?: pulumi.Input<string>;
    contractSchemaId?: pulumi.Input<string>;
    contractTemplateName?: pulumi.Input<string>;
    relationshipType?: pulumi.Input<string>;
    schemaId?: pulumi.Input<string>;
    templateName?: pulumi.Input<string>;
    vrfName?: pulumi.Input<string>;
}

/**
 * The set of arguments for constructing a SchemaTemplateVrfContract resource.
 */
export interface SchemaTemplateVrfContractArgs {
    contractName: pulumi.Input<string>;
    contractSchemaId?: pulumi.Input<string>;
    contractTemplateName?: pulumi.Input<string>;
    relationshipType: pulumi.Input<string>;
    schemaId: pulumi.Input<string>;
    templateName: pulumi.Input<string>;
    vrfName: pulumi.Input<string>;
}
