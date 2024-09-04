// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export class SchemaTemplateContractFilter extends pulumi.CustomResource {
    /**
     * Get an existing SchemaTemplateContractFilter resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: SchemaTemplateContractFilterState, opts?: pulumi.CustomResourceOptions): SchemaTemplateContractFilter {
        return new SchemaTemplateContractFilter(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'mso:index/schemaTemplateContractFilter:SchemaTemplateContractFilter';

    /**
     * Returns true if the given object is an instance of SchemaTemplateContractFilter.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is SchemaTemplateContractFilter {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === SchemaTemplateContractFilter.__pulumiType;
    }

    public readonly action!: pulumi.Output<string>;
    public readonly contractName!: pulumi.Output<string>;
    public readonly directives!: pulumi.Output<string[]>;
    public readonly filterName!: pulumi.Output<string>;
    public readonly filterSchemaId!: pulumi.Output<string>;
    public readonly filterTemplateName!: pulumi.Output<string>;
    public readonly filterType!: pulumi.Output<string>;
    public readonly priority!: pulumi.Output<string>;
    public readonly schemaId!: pulumi.Output<string>;
    public readonly templateName!: pulumi.Output<string>;

    /**
     * Create a SchemaTemplateContractFilter resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: SchemaTemplateContractFilterArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: SchemaTemplateContractFilterArgs | SchemaTemplateContractFilterState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as SchemaTemplateContractFilterState | undefined;
            resourceInputs["action"] = state ? state.action : undefined;
            resourceInputs["contractName"] = state ? state.contractName : undefined;
            resourceInputs["directives"] = state ? state.directives : undefined;
            resourceInputs["filterName"] = state ? state.filterName : undefined;
            resourceInputs["filterSchemaId"] = state ? state.filterSchemaId : undefined;
            resourceInputs["filterTemplateName"] = state ? state.filterTemplateName : undefined;
            resourceInputs["filterType"] = state ? state.filterType : undefined;
            resourceInputs["priority"] = state ? state.priority : undefined;
            resourceInputs["schemaId"] = state ? state.schemaId : undefined;
            resourceInputs["templateName"] = state ? state.templateName : undefined;
        } else {
            const args = argsOrState as SchemaTemplateContractFilterArgs | undefined;
            if ((!args || args.contractName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'contractName'");
            }
            if ((!args || args.filterName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'filterName'");
            }
            if ((!args || args.filterType === undefined) && !opts.urn) {
                throw new Error("Missing required property 'filterType'");
            }
            if ((!args || args.schemaId === undefined) && !opts.urn) {
                throw new Error("Missing required property 'schemaId'");
            }
            if ((!args || args.templateName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'templateName'");
            }
            resourceInputs["action"] = args ? args.action : undefined;
            resourceInputs["contractName"] = args ? args.contractName : undefined;
            resourceInputs["directives"] = args ? args.directives : undefined;
            resourceInputs["filterName"] = args ? args.filterName : undefined;
            resourceInputs["filterSchemaId"] = args ? args.filterSchemaId : undefined;
            resourceInputs["filterTemplateName"] = args ? args.filterTemplateName : undefined;
            resourceInputs["filterType"] = args ? args.filterType : undefined;
            resourceInputs["priority"] = args ? args.priority : undefined;
            resourceInputs["schemaId"] = args ? args.schemaId : undefined;
            resourceInputs["templateName"] = args ? args.templateName : undefined;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(SchemaTemplateContractFilter.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering SchemaTemplateContractFilter resources.
 */
export interface SchemaTemplateContractFilterState {
    action?: pulumi.Input<string>;
    contractName?: pulumi.Input<string>;
    directives?: pulumi.Input<pulumi.Input<string>[]>;
    filterName?: pulumi.Input<string>;
    filterSchemaId?: pulumi.Input<string>;
    filterTemplateName?: pulumi.Input<string>;
    filterType?: pulumi.Input<string>;
    priority?: pulumi.Input<string>;
    schemaId?: pulumi.Input<string>;
    templateName?: pulumi.Input<string>;
}

/**
 * The set of arguments for constructing a SchemaTemplateContractFilter resource.
 */
export interface SchemaTemplateContractFilterArgs {
    action?: pulumi.Input<string>;
    contractName: pulumi.Input<string>;
    directives?: pulumi.Input<pulumi.Input<string>[]>;
    filterName: pulumi.Input<string>;
    filterSchemaId?: pulumi.Input<string>;
    filterTemplateName?: pulumi.Input<string>;
    filterType: pulumi.Input<string>;
    priority?: pulumi.Input<string>;
    schemaId: pulumi.Input<string>;
    templateName: pulumi.Input<string>;
}
