// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export class CrEeNamespace extends pulumi.CustomResource {
    /**
     * Get an existing CrEeNamespace resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: CrEeNamespaceState, opts?: pulumi.CustomResourceOptions): CrEeNamespace {
        return new CrEeNamespace(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'alicloud:index/crEeNamespace:CrEeNamespace';

    /**
     * Returns true if the given object is an instance of CrEeNamespace.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is CrEeNamespace {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === CrEeNamespace.__pulumiType;
    }

    public readonly autoCreate!: pulumi.Output<boolean | undefined>;
    public readonly defaultVisibility!: pulumi.Output<string>;
    public readonly instanceId!: pulumi.Output<string>;
    public readonly name!: pulumi.Output<string>;

    /**
     * Create a CrEeNamespace resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: CrEeNamespaceArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: CrEeNamespaceArgs | CrEeNamespaceState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as CrEeNamespaceState | undefined;
            resourceInputs["autoCreate"] = state ? state.autoCreate : undefined;
            resourceInputs["defaultVisibility"] = state ? state.defaultVisibility : undefined;
            resourceInputs["instanceId"] = state ? state.instanceId : undefined;
            resourceInputs["name"] = state ? state.name : undefined;
        } else {
            const args = argsOrState as CrEeNamespaceArgs | undefined;
            if ((!args || args.instanceId === undefined) && !opts.urn) {
                throw new Error("Missing required property 'instanceId'");
            }
            resourceInputs["autoCreate"] = args ? args.autoCreate : undefined;
            resourceInputs["defaultVisibility"] = args ? args.defaultVisibility : undefined;
            resourceInputs["instanceId"] = args ? args.instanceId : undefined;
            resourceInputs["name"] = args ? args.name : undefined;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(CrEeNamespace.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering CrEeNamespace resources.
 */
export interface CrEeNamespaceState {
    autoCreate?: pulumi.Input<boolean>;
    defaultVisibility?: pulumi.Input<string>;
    instanceId?: pulumi.Input<string>;
    name?: pulumi.Input<string>;
}

/**
 * The set of arguments for constructing a CrEeNamespace resource.
 */
export interface CrEeNamespaceArgs {
    autoCreate?: pulumi.Input<boolean>;
    defaultVisibility?: pulumi.Input<string>;
    instanceId: pulumi.Input<string>;
    name?: pulumi.Input<string>;
}
