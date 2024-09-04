// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export class SchemaTemplateAnpEpgUsegAttr extends pulumi.CustomResource {
    /**
     * Get an existing SchemaTemplateAnpEpgUsegAttr resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: SchemaTemplateAnpEpgUsegAttrState, opts?: pulumi.CustomResourceOptions): SchemaTemplateAnpEpgUsegAttr {
        return new SchemaTemplateAnpEpgUsegAttr(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'mso:index/schemaTemplateAnpEpgUsegAttr:SchemaTemplateAnpEpgUsegAttr';

    /**
     * Returns true if the given object is an instance of SchemaTemplateAnpEpgUsegAttr.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is SchemaTemplateAnpEpgUsegAttr {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === SchemaTemplateAnpEpgUsegAttr.__pulumiType;
    }

    public readonly anpName!: pulumi.Output<string>;
    public readonly category!: pulumi.Output<string>;
    public readonly description!: pulumi.Output<string>;
    public readonly epgName!: pulumi.Output<string>;
    public readonly name!: pulumi.Output<string>;
    public readonly operator!: pulumi.Output<string>;
    public readonly schemaId!: pulumi.Output<string>;
    public readonly templateName!: pulumi.Output<string>;
    public readonly usegSubnet!: pulumi.Output<boolean>;
    public readonly usegType!: pulumi.Output<string>;
    public readonly value!: pulumi.Output<string>;

    /**
     * Create a SchemaTemplateAnpEpgUsegAttr resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: SchemaTemplateAnpEpgUsegAttrArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: SchemaTemplateAnpEpgUsegAttrArgs | SchemaTemplateAnpEpgUsegAttrState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as SchemaTemplateAnpEpgUsegAttrState | undefined;
            resourceInputs["anpName"] = state ? state.anpName : undefined;
            resourceInputs["category"] = state ? state.category : undefined;
            resourceInputs["description"] = state ? state.description : undefined;
            resourceInputs["epgName"] = state ? state.epgName : undefined;
            resourceInputs["name"] = state ? state.name : undefined;
            resourceInputs["operator"] = state ? state.operator : undefined;
            resourceInputs["schemaId"] = state ? state.schemaId : undefined;
            resourceInputs["templateName"] = state ? state.templateName : undefined;
            resourceInputs["usegSubnet"] = state ? state.usegSubnet : undefined;
            resourceInputs["usegType"] = state ? state.usegType : undefined;
            resourceInputs["value"] = state ? state.value : undefined;
        } else {
            const args = argsOrState as SchemaTemplateAnpEpgUsegAttrArgs | undefined;
            if ((!args || args.anpName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'anpName'");
            }
            if ((!args || args.epgName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'epgName'");
            }
            if ((!args || args.schemaId === undefined) && !opts.urn) {
                throw new Error("Missing required property 'schemaId'");
            }
            if ((!args || args.templateName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'templateName'");
            }
            if ((!args || args.usegType === undefined) && !opts.urn) {
                throw new Error("Missing required property 'usegType'");
            }
            if ((!args || args.value === undefined) && !opts.urn) {
                throw new Error("Missing required property 'value'");
            }
            resourceInputs["anpName"] = args ? args.anpName : undefined;
            resourceInputs["category"] = args ? args.category : undefined;
            resourceInputs["description"] = args ? args.description : undefined;
            resourceInputs["epgName"] = args ? args.epgName : undefined;
            resourceInputs["name"] = args ? args.name : undefined;
            resourceInputs["operator"] = args ? args.operator : undefined;
            resourceInputs["schemaId"] = args ? args.schemaId : undefined;
            resourceInputs["templateName"] = args ? args.templateName : undefined;
            resourceInputs["usegSubnet"] = args ? args.usegSubnet : undefined;
            resourceInputs["usegType"] = args ? args.usegType : undefined;
            resourceInputs["value"] = args ? args.value : undefined;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(SchemaTemplateAnpEpgUsegAttr.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering SchemaTemplateAnpEpgUsegAttr resources.
 */
export interface SchemaTemplateAnpEpgUsegAttrState {
    anpName?: pulumi.Input<string>;
    category?: pulumi.Input<string>;
    description?: pulumi.Input<string>;
    epgName?: pulumi.Input<string>;
    name?: pulumi.Input<string>;
    operator?: pulumi.Input<string>;
    schemaId?: pulumi.Input<string>;
    templateName?: pulumi.Input<string>;
    usegSubnet?: pulumi.Input<boolean>;
    usegType?: pulumi.Input<string>;
    value?: pulumi.Input<string>;
}

/**
 * The set of arguments for constructing a SchemaTemplateAnpEpgUsegAttr resource.
 */
export interface SchemaTemplateAnpEpgUsegAttrArgs {
    anpName: pulumi.Input<string>;
    category?: pulumi.Input<string>;
    description?: pulumi.Input<string>;
    epgName: pulumi.Input<string>;
    name?: pulumi.Input<string>;
    operator?: pulumi.Input<string>;
    schemaId: pulumi.Input<string>;
    templateName: pulumi.Input<string>;
    usegSubnet?: pulumi.Input<boolean>;
    usegType: pulumi.Input<string>;
    value: pulumi.Input<string>;
}
