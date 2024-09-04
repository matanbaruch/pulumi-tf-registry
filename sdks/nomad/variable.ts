// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export class Variable extends pulumi.CustomResource {
    /**
     * Get an existing Variable resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: VariableState, opts?: pulumi.CustomResourceOptions): Variable {
        return new Variable(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'nomad:index/variable:Variable';

    /**
     * Returns true if the given object is an instance of Variable.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is Variable {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === Variable.__pulumiType;
    }

    /**
     * A map of strings to be added as items in the variable
     */
    public readonly items!: pulumi.Output<{[key: string]: string}>;
    /**
     * Variable namespace
     */
    public readonly namespace!: pulumi.Output<string | undefined>;
    /**
     * The path at which the variable items will be stored, must be between 1 and 128 characters in length, be URL safe, and
     * not include '@' or '.' characters
     */
    public readonly path!: pulumi.Output<string>;

    /**
     * Create a Variable resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: VariableArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: VariableArgs | VariableState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as VariableState | undefined;
            resourceInputs["items"] = state ? state.items : undefined;
            resourceInputs["namespace"] = state ? state.namespace : undefined;
            resourceInputs["path"] = state ? state.path : undefined;
        } else {
            const args = argsOrState as VariableArgs | undefined;
            if ((!args || args.items === undefined) && !opts.urn) {
                throw new Error("Missing required property 'items'");
            }
            if ((!args || args.path === undefined) && !opts.urn) {
                throw new Error("Missing required property 'path'");
            }
            resourceInputs["items"] = args?.items ? pulumi.secret(args.items) : undefined;
            resourceInputs["namespace"] = args ? args.namespace : undefined;
            resourceInputs["path"] = args ? args.path : undefined;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const secretOpts = { additionalSecretOutputs: ["items"] };
        opts = pulumi.mergeOptions(opts, secretOpts);
        super(Variable.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering Variable resources.
 */
export interface VariableState {
    /**
     * A map of strings to be added as items in the variable
     */
    items?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    /**
     * Variable namespace
     */
    namespace?: pulumi.Input<string>;
    /**
     * The path at which the variable items will be stored, must be between 1 and 128 characters in length, be URL safe, and
     * not include '@' or '.' characters
     */
    path?: pulumi.Input<string>;
}

/**
 * The set of arguments for constructing a Variable resource.
 */
export interface VariableArgs {
    /**
     * A map of strings to be added as items in the variable
     */
    items: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    /**
     * Variable namespace
     */
    namespace?: pulumi.Input<string>;
    /**
     * The path at which the variable items will be stored, must be between 1 and 128 characters in length, be URL safe, and
     * not include '@' or '.' characters
     */
    path: pulumi.Input<string>;
}
