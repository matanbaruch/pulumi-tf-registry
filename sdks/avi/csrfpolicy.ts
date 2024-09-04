// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export class Csrfpolicy extends pulumi.CustomResource {
    /**
     * Get an existing Csrfpolicy resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: CsrfpolicyState, opts?: pulumi.CustomResourceOptions): Csrfpolicy {
        return new Csrfpolicy(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'avi:index/csrfpolicy:Csrfpolicy';

    /**
     * Returns true if the given object is an instance of Csrfpolicy.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is Csrfpolicy {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === Csrfpolicy.__pulumiType;
    }

    public readonly configpbAttributes!: pulumi.Output<outputs.CsrfpolicyConfigpbAttribute[] | undefined>;
    public readonly cookieName!: pulumi.Output<string | undefined>;
    public readonly description!: pulumi.Output<string>;
    public readonly name!: pulumi.Output<string>;
    public readonly rules!: pulumi.Output<outputs.CsrfpolicyRule[]>;
    public readonly tenantRef!: pulumi.Output<string>;
    public readonly tokenValidityTimeMin!: pulumi.Output<string | undefined>;
    public readonly uuid!: pulumi.Output<string>;

    /**
     * Create a Csrfpolicy resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: CsrfpolicyArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: CsrfpolicyArgs | CsrfpolicyState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as CsrfpolicyState | undefined;
            resourceInputs["configpbAttributes"] = state ? state.configpbAttributes : undefined;
            resourceInputs["cookieName"] = state ? state.cookieName : undefined;
            resourceInputs["description"] = state ? state.description : undefined;
            resourceInputs["name"] = state ? state.name : undefined;
            resourceInputs["rules"] = state ? state.rules : undefined;
            resourceInputs["tenantRef"] = state ? state.tenantRef : undefined;
            resourceInputs["tokenValidityTimeMin"] = state ? state.tokenValidityTimeMin : undefined;
            resourceInputs["uuid"] = state ? state.uuid : undefined;
        } else {
            const args = argsOrState as CsrfpolicyArgs | undefined;
            if ((!args || args.rules === undefined) && !opts.urn) {
                throw new Error("Missing required property 'rules'");
            }
            resourceInputs["configpbAttributes"] = args ? args.configpbAttributes : undefined;
            resourceInputs["cookieName"] = args ? args.cookieName : undefined;
            resourceInputs["description"] = args ? args.description : undefined;
            resourceInputs["name"] = args ? args.name : undefined;
            resourceInputs["rules"] = args ? args.rules : undefined;
            resourceInputs["tenantRef"] = args ? args.tenantRef : undefined;
            resourceInputs["tokenValidityTimeMin"] = args ? args.tokenValidityTimeMin : undefined;
            resourceInputs["uuid"] = args ? args.uuid : undefined;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(Csrfpolicy.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering Csrfpolicy resources.
 */
export interface CsrfpolicyState {
    configpbAttributes?: pulumi.Input<pulumi.Input<inputs.CsrfpolicyConfigpbAttribute>[]>;
    cookieName?: pulumi.Input<string>;
    description?: pulumi.Input<string>;
    name?: pulumi.Input<string>;
    rules?: pulumi.Input<pulumi.Input<inputs.CsrfpolicyRule>[]>;
    tenantRef?: pulumi.Input<string>;
    tokenValidityTimeMin?: pulumi.Input<string>;
    uuid?: pulumi.Input<string>;
}

/**
 * The set of arguments for constructing a Csrfpolicy resource.
 */
export interface CsrfpolicyArgs {
    configpbAttributes?: pulumi.Input<pulumi.Input<inputs.CsrfpolicyConfigpbAttribute>[]>;
    cookieName?: pulumi.Input<string>;
    description?: pulumi.Input<string>;
    name?: pulumi.Input<string>;
    rules: pulumi.Input<pulumi.Input<inputs.CsrfpolicyRule>[]>;
    tenantRef?: pulumi.Input<string>;
    tokenValidityTimeMin?: pulumi.Input<string>;
    uuid?: pulumi.Input<string>;
}
