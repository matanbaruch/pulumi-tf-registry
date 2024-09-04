// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export class Schema extends pulumi.CustomResource {
    /**
     * Get an existing Schema resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: SchemaState, opts?: pulumi.CustomResourceOptions): Schema {
        return new Schema(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'mso:index/schema:Schema';

    /**
     * Returns true if the given object is an instance of Schema.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is Schema {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === Schema.__pulumiType;
    }

    public readonly description!: pulumi.Output<string>;
    public readonly name!: pulumi.Output<string>;
    /**
     * @deprecated Deprecated
     */
    public readonly templateName!: pulumi.Output<string | undefined>;
    public readonly templates!: pulumi.Output<outputs.SchemaTemplate[] | undefined>;
    /**
     * @deprecated Deprecated
     */
    public readonly tenantId!: pulumi.Output<string | undefined>;

    /**
     * Create a Schema resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args?: SchemaArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: SchemaArgs | SchemaState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as SchemaState | undefined;
            resourceInputs["description"] = state ? state.description : undefined;
            resourceInputs["name"] = state ? state.name : undefined;
            resourceInputs["templateName"] = state ? state.templateName : undefined;
            resourceInputs["templates"] = state ? state.templates : undefined;
            resourceInputs["tenantId"] = state ? state.tenantId : undefined;
        } else {
            const args = argsOrState as SchemaArgs | undefined;
            resourceInputs["description"] = args ? args.description : undefined;
            resourceInputs["name"] = args ? args.name : undefined;
            resourceInputs["templateName"] = args ? args.templateName : undefined;
            resourceInputs["templates"] = args ? args.templates : undefined;
            resourceInputs["tenantId"] = args ? args.tenantId : undefined;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(Schema.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering Schema resources.
 */
export interface SchemaState {
    description?: pulumi.Input<string>;
    name?: pulumi.Input<string>;
    /**
     * @deprecated Deprecated
     */
    templateName?: pulumi.Input<string>;
    templates?: pulumi.Input<pulumi.Input<inputs.SchemaTemplate>[]>;
    /**
     * @deprecated Deprecated
     */
    tenantId?: pulumi.Input<string>;
}

/**
 * The set of arguments for constructing a Schema resource.
 */
export interface SchemaArgs {
    description?: pulumi.Input<string>;
    name?: pulumi.Input<string>;
    /**
     * @deprecated Deprecated
     */
    templateName?: pulumi.Input<string>;
    templates?: pulumi.Input<pulumi.Input<inputs.SchemaTemplate>[]>;
    /**
     * @deprecated Deprecated
     */
    tenantId?: pulumi.Input<string>;
}
