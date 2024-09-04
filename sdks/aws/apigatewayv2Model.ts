// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export class Apigatewayv2Model extends pulumi.CustomResource {
    /**
     * Get an existing Apigatewayv2Model resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: Apigatewayv2ModelState, opts?: pulumi.CustomResourceOptions): Apigatewayv2Model {
        return new Apigatewayv2Model(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'aws:index/apigatewayv2Model:Apigatewayv2Model';

    /**
     * Returns true if the given object is an instance of Apigatewayv2Model.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is Apigatewayv2Model {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === Apigatewayv2Model.__pulumiType;
    }

    public readonly apiId!: pulumi.Output<string>;
    public readonly contentType!: pulumi.Output<string>;
    public readonly description!: pulumi.Output<string | undefined>;
    public readonly name!: pulumi.Output<string>;
    public readonly schema!: pulumi.Output<string>;

    /**
     * Create a Apigatewayv2Model resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: Apigatewayv2ModelArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: Apigatewayv2ModelArgs | Apigatewayv2ModelState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as Apigatewayv2ModelState | undefined;
            resourceInputs["apiId"] = state ? state.apiId : undefined;
            resourceInputs["contentType"] = state ? state.contentType : undefined;
            resourceInputs["description"] = state ? state.description : undefined;
            resourceInputs["name"] = state ? state.name : undefined;
            resourceInputs["schema"] = state ? state.schema : undefined;
        } else {
            const args = argsOrState as Apigatewayv2ModelArgs | undefined;
            if ((!args || args.apiId === undefined) && !opts.urn) {
                throw new Error("Missing required property 'apiId'");
            }
            if ((!args || args.contentType === undefined) && !opts.urn) {
                throw new Error("Missing required property 'contentType'");
            }
            if ((!args || args.schema === undefined) && !opts.urn) {
                throw new Error("Missing required property 'schema'");
            }
            resourceInputs["apiId"] = args ? args.apiId : undefined;
            resourceInputs["contentType"] = args ? args.contentType : undefined;
            resourceInputs["description"] = args ? args.description : undefined;
            resourceInputs["name"] = args ? args.name : undefined;
            resourceInputs["schema"] = args ? args.schema : undefined;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(Apigatewayv2Model.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering Apigatewayv2Model resources.
 */
export interface Apigatewayv2ModelState {
    apiId?: pulumi.Input<string>;
    contentType?: pulumi.Input<string>;
    description?: pulumi.Input<string>;
    name?: pulumi.Input<string>;
    schema?: pulumi.Input<string>;
}

/**
 * The set of arguments for constructing a Apigatewayv2Model resource.
 */
export interface Apigatewayv2ModelArgs {
    apiId: pulumi.Input<string>;
    contentType: pulumi.Input<string>;
    description?: pulumi.Input<string>;
    name?: pulumi.Input<string>;
    schema: pulumi.Input<string>;
}
