// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export class Systemcmdpolicy extends pulumi.CustomResource {
    /**
     * Get an existing Systemcmdpolicy resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: SystemcmdpolicyState, opts?: pulumi.CustomResourceOptions): Systemcmdpolicy {
        return new Systemcmdpolicy(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'citrixadc:index/systemcmdpolicy:Systemcmdpolicy';

    /**
     * Returns true if the given object is an instance of Systemcmdpolicy.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is Systemcmdpolicy {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === Systemcmdpolicy.__pulumiType;
    }

    public readonly action!: pulumi.Output<string>;
    public readonly cmdspec!: pulumi.Output<string>;
    public readonly policyname!: pulumi.Output<string>;

    /**
     * Create a Systemcmdpolicy resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: SystemcmdpolicyArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: SystemcmdpolicyArgs | SystemcmdpolicyState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as SystemcmdpolicyState | undefined;
            resourceInputs["action"] = state ? state.action : undefined;
            resourceInputs["cmdspec"] = state ? state.cmdspec : undefined;
            resourceInputs["policyname"] = state ? state.policyname : undefined;
        } else {
            const args = argsOrState as SystemcmdpolicyArgs | undefined;
            if ((!args || args.action === undefined) && !opts.urn) {
                throw new Error("Missing required property 'action'");
            }
            if ((!args || args.cmdspec === undefined) && !opts.urn) {
                throw new Error("Missing required property 'cmdspec'");
            }
            if ((!args || args.policyname === undefined) && !opts.urn) {
                throw new Error("Missing required property 'policyname'");
            }
            resourceInputs["action"] = args ? args.action : undefined;
            resourceInputs["cmdspec"] = args ? args.cmdspec : undefined;
            resourceInputs["policyname"] = args ? args.policyname : undefined;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(Systemcmdpolicy.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering Systemcmdpolicy resources.
 */
export interface SystemcmdpolicyState {
    action?: pulumi.Input<string>;
    cmdspec?: pulumi.Input<string>;
    policyname?: pulumi.Input<string>;
}

/**
 * The set of arguments for constructing a Systemcmdpolicy resource.
 */
export interface SystemcmdpolicyArgs {
    action: pulumi.Input<string>;
    cmdspec: pulumi.Input<string>;
    policyname: pulumi.Input<string>;
}
