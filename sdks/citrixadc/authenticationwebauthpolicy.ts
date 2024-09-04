// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export class Authenticationwebauthpolicy extends pulumi.CustomResource {
    /**
     * Get an existing Authenticationwebauthpolicy resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: AuthenticationwebauthpolicyState, opts?: pulumi.CustomResourceOptions): Authenticationwebauthpolicy {
        return new Authenticationwebauthpolicy(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'citrixadc:index/authenticationwebauthpolicy:Authenticationwebauthpolicy';

    /**
     * Returns true if the given object is an instance of Authenticationwebauthpolicy.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is Authenticationwebauthpolicy {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === Authenticationwebauthpolicy.__pulumiType;
    }

    public readonly action!: pulumi.Output<string>;
    public readonly name!: pulumi.Output<string>;
    public readonly rule!: pulumi.Output<string>;

    /**
     * Create a Authenticationwebauthpolicy resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: AuthenticationwebauthpolicyArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: AuthenticationwebauthpolicyArgs | AuthenticationwebauthpolicyState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as AuthenticationwebauthpolicyState | undefined;
            resourceInputs["action"] = state ? state.action : undefined;
            resourceInputs["name"] = state ? state.name : undefined;
            resourceInputs["rule"] = state ? state.rule : undefined;
        } else {
            const args = argsOrState as AuthenticationwebauthpolicyArgs | undefined;
            if ((!args || args.action === undefined) && !opts.urn) {
                throw new Error("Missing required property 'action'");
            }
            if ((!args || args.rule === undefined) && !opts.urn) {
                throw new Error("Missing required property 'rule'");
            }
            resourceInputs["action"] = args ? args.action : undefined;
            resourceInputs["name"] = args ? args.name : undefined;
            resourceInputs["rule"] = args ? args.rule : undefined;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(Authenticationwebauthpolicy.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering Authenticationwebauthpolicy resources.
 */
export interface AuthenticationwebauthpolicyState {
    action?: pulumi.Input<string>;
    name?: pulumi.Input<string>;
    rule?: pulumi.Input<string>;
}

/**
 * The set of arguments for constructing a Authenticationwebauthpolicy resource.
 */
export interface AuthenticationwebauthpolicyArgs {
    action: pulumi.Input<string>;
    name?: pulumi.Input<string>;
    rule: pulumi.Input<string>;
}
