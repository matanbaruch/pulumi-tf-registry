// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export class Template extends pulumi.CustomResource {
    /**
     * Get an existing Template resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: TemplateState, opts?: pulumi.CustomResourceOptions): Template {
        return new Template(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'dme:index/template:Template';

    /**
     * Returns true if the given object is an instance of Template.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is Template {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === Template.__pulumiType;
    }

    public readonly domainIds!: pulumi.Output<number[]>;
    public readonly name!: pulumi.Output<string>;
    public readonly publicTemplate!: pulumi.Output<string>;

    /**
     * Create a Template resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args?: TemplateArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: TemplateArgs | TemplateState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as TemplateState | undefined;
            resourceInputs["domainIds"] = state ? state.domainIds : undefined;
            resourceInputs["name"] = state ? state.name : undefined;
            resourceInputs["publicTemplate"] = state ? state.publicTemplate : undefined;
        } else {
            const args = argsOrState as TemplateArgs | undefined;
            resourceInputs["domainIds"] = args ? args.domainIds : undefined;
            resourceInputs["name"] = args ? args.name : undefined;
            resourceInputs["publicTemplate"] = args ? args.publicTemplate : undefined;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(Template.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering Template resources.
 */
export interface TemplateState {
    domainIds?: pulumi.Input<pulumi.Input<number>[]>;
    name?: pulumi.Input<string>;
    publicTemplate?: pulumi.Input<string>;
}

/**
 * The set of arguments for constructing a Template resource.
 */
export interface TemplateArgs {
    domainIds?: pulumi.Input<pulumi.Input<number>[]>;
    name?: pulumi.Input<string>;
    publicTemplate?: pulumi.Input<string>;
}
