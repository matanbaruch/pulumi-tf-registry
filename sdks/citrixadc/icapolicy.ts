// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export class Icapolicy extends pulumi.CustomResource {
    /**
     * Get an existing Icapolicy resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: IcapolicyState, opts?: pulumi.CustomResourceOptions): Icapolicy {
        return new Icapolicy(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'citrixadc:index/icapolicy:Icapolicy';

    /**
     * Returns true if the given object is an instance of Icapolicy.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is Icapolicy {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === Icapolicy.__pulumiType;
    }

    public readonly action!: pulumi.Output<string>;
    public readonly comment!: pulumi.Output<string>;
    public readonly logaction!: pulumi.Output<string>;
    public readonly name!: pulumi.Output<string>;
    public readonly rule!: pulumi.Output<string>;

    /**
     * Create a Icapolicy resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: IcapolicyArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: IcapolicyArgs | IcapolicyState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as IcapolicyState | undefined;
            resourceInputs["action"] = state ? state.action : undefined;
            resourceInputs["comment"] = state ? state.comment : undefined;
            resourceInputs["logaction"] = state ? state.logaction : undefined;
            resourceInputs["name"] = state ? state.name : undefined;
            resourceInputs["rule"] = state ? state.rule : undefined;
        } else {
            const args = argsOrState as IcapolicyArgs | undefined;
            if ((!args || args.action === undefined) && !opts.urn) {
                throw new Error("Missing required property 'action'");
            }
            if ((!args || args.rule === undefined) && !opts.urn) {
                throw new Error("Missing required property 'rule'");
            }
            resourceInputs["action"] = args ? args.action : undefined;
            resourceInputs["comment"] = args ? args.comment : undefined;
            resourceInputs["logaction"] = args ? args.logaction : undefined;
            resourceInputs["name"] = args ? args.name : undefined;
            resourceInputs["rule"] = args ? args.rule : undefined;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(Icapolicy.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering Icapolicy resources.
 */
export interface IcapolicyState {
    action?: pulumi.Input<string>;
    comment?: pulumi.Input<string>;
    logaction?: pulumi.Input<string>;
    name?: pulumi.Input<string>;
    rule?: pulumi.Input<string>;
}

/**
 * The set of arguments for constructing a Icapolicy resource.
 */
export interface IcapolicyArgs {
    action: pulumi.Input<string>;
    comment?: pulumi.Input<string>;
    logaction?: pulumi.Input<string>;
    name?: pulumi.Input<string>;
    rule: pulumi.Input<string>;
}
