// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export class ComputeSecurityApplication extends pulumi.CustomResource {
    /**
     * Get an existing ComputeSecurityApplication resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: ComputeSecurityApplicationState, opts?: pulumi.CustomResourceOptions): ComputeSecurityApplication {
        return new ComputeSecurityApplication(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'opc:index/computeSecurityApplication:ComputeSecurityApplication';

    /**
     * Returns true if the given object is an instance of ComputeSecurityApplication.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is ComputeSecurityApplication {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === ComputeSecurityApplication.__pulumiType;
    }

    public readonly description!: pulumi.Output<string | undefined>;
    public readonly dport!: pulumi.Output<string | undefined>;
    public readonly icmpcode!: pulumi.Output<string | undefined>;
    public readonly icmptype!: pulumi.Output<string | undefined>;
    public readonly name!: pulumi.Output<string>;
    public readonly protocol!: pulumi.Output<string>;

    /**
     * Create a ComputeSecurityApplication resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: ComputeSecurityApplicationArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: ComputeSecurityApplicationArgs | ComputeSecurityApplicationState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as ComputeSecurityApplicationState | undefined;
            resourceInputs["description"] = state ? state.description : undefined;
            resourceInputs["dport"] = state ? state.dport : undefined;
            resourceInputs["icmpcode"] = state ? state.icmpcode : undefined;
            resourceInputs["icmptype"] = state ? state.icmptype : undefined;
            resourceInputs["name"] = state ? state.name : undefined;
            resourceInputs["protocol"] = state ? state.protocol : undefined;
        } else {
            const args = argsOrState as ComputeSecurityApplicationArgs | undefined;
            if ((!args || args.protocol === undefined) && !opts.urn) {
                throw new Error("Missing required property 'protocol'");
            }
            resourceInputs["description"] = args ? args.description : undefined;
            resourceInputs["dport"] = args ? args.dport : undefined;
            resourceInputs["icmpcode"] = args ? args.icmpcode : undefined;
            resourceInputs["icmptype"] = args ? args.icmptype : undefined;
            resourceInputs["name"] = args ? args.name : undefined;
            resourceInputs["protocol"] = args ? args.protocol : undefined;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(ComputeSecurityApplication.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering ComputeSecurityApplication resources.
 */
export interface ComputeSecurityApplicationState {
    description?: pulumi.Input<string>;
    dport?: pulumi.Input<string>;
    icmpcode?: pulumi.Input<string>;
    icmptype?: pulumi.Input<string>;
    name?: pulumi.Input<string>;
    protocol?: pulumi.Input<string>;
}

/**
 * The set of arguments for constructing a ComputeSecurityApplication resource.
 */
export interface ComputeSecurityApplicationArgs {
    description?: pulumi.Input<string>;
    dport?: pulumi.Input<string>;
    icmpcode?: pulumi.Input<string>;
    icmptype?: pulumi.Input<string>;
    name?: pulumi.Input<string>;
    protocol: pulumi.Input<string>;
}
