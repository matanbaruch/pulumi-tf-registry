// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export class AaagroupAuditnslogpolicyBinding extends pulumi.CustomResource {
    /**
     * Get an existing AaagroupAuditnslogpolicyBinding resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: AaagroupAuditnslogpolicyBindingState, opts?: pulumi.CustomResourceOptions): AaagroupAuditnslogpolicyBinding {
        return new AaagroupAuditnslogpolicyBinding(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'citrixadc:index/aaagroupAuditnslogpolicyBinding:AaagroupAuditnslogpolicyBinding';

    /**
     * Returns true if the given object is an instance of AaagroupAuditnslogpolicyBinding.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is AaagroupAuditnslogpolicyBinding {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === AaagroupAuditnslogpolicyBinding.__pulumiType;
    }

    public readonly gotopriorityexpression!: pulumi.Output<string>;
    public readonly groupname!: pulumi.Output<string>;
    public readonly policy!: pulumi.Output<string>;
    public readonly priority!: pulumi.Output<number>;
    public readonly type!: pulumi.Output<string>;

    /**
     * Create a AaagroupAuditnslogpolicyBinding resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: AaagroupAuditnslogpolicyBindingArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: AaagroupAuditnslogpolicyBindingArgs | AaagroupAuditnslogpolicyBindingState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as AaagroupAuditnslogpolicyBindingState | undefined;
            resourceInputs["gotopriorityexpression"] = state ? state.gotopriorityexpression : undefined;
            resourceInputs["groupname"] = state ? state.groupname : undefined;
            resourceInputs["policy"] = state ? state.policy : undefined;
            resourceInputs["priority"] = state ? state.priority : undefined;
            resourceInputs["type"] = state ? state.type : undefined;
        } else {
            const args = argsOrState as AaagroupAuditnslogpolicyBindingArgs | undefined;
            if ((!args || args.groupname === undefined) && !opts.urn) {
                throw new Error("Missing required property 'groupname'");
            }
            if ((!args || args.policy === undefined) && !opts.urn) {
                throw new Error("Missing required property 'policy'");
            }
            if ((!args || args.priority === undefined) && !opts.urn) {
                throw new Error("Missing required property 'priority'");
            }
            resourceInputs["gotopriorityexpression"] = args ? args.gotopriorityexpression : undefined;
            resourceInputs["groupname"] = args ? args.groupname : undefined;
            resourceInputs["policy"] = args ? args.policy : undefined;
            resourceInputs["priority"] = args ? args.priority : undefined;
            resourceInputs["type"] = args ? args.type : undefined;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(AaagroupAuditnslogpolicyBinding.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering AaagroupAuditnslogpolicyBinding resources.
 */
export interface AaagroupAuditnslogpolicyBindingState {
    gotopriorityexpression?: pulumi.Input<string>;
    groupname?: pulumi.Input<string>;
    policy?: pulumi.Input<string>;
    priority?: pulumi.Input<number>;
    type?: pulumi.Input<string>;
}

/**
 * The set of arguments for constructing a AaagroupAuditnslogpolicyBinding resource.
 */
export interface AaagroupAuditnslogpolicyBindingArgs {
    gotopriorityexpression?: pulumi.Input<string>;
    groupname: pulumi.Input<string>;
    policy: pulumi.Input<string>;
    priority: pulumi.Input<number>;
    type?: pulumi.Input<string>;
}
