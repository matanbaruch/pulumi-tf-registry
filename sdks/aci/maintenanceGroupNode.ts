// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export class MaintenanceGroupNode extends pulumi.CustomResource {
    /**
     * Get an existing MaintenanceGroupNode resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: MaintenanceGroupNodeState, opts?: pulumi.CustomResourceOptions): MaintenanceGroupNode {
        return new MaintenanceGroupNode(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'aci:index/maintenanceGroupNode:MaintenanceGroupNode';

    /**
     * Returns true if the given object is an instance of MaintenanceGroupNode.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is MaintenanceGroupNode {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === MaintenanceGroupNode.__pulumiType;
    }

    public readonly annotation!: pulumi.Output<string>;
    public readonly description!: pulumi.Output<string>;
    public readonly from_!: pulumi.Output<string>;
    public readonly name!: pulumi.Output<string>;
    public readonly nameAlias!: pulumi.Output<string>;
    public readonly podMaintenanceGroupDn!: pulumi.Output<string>;
    public readonly to_!: pulumi.Output<string>;

    /**
     * Create a MaintenanceGroupNode resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: MaintenanceGroupNodeArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: MaintenanceGroupNodeArgs | MaintenanceGroupNodeState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as MaintenanceGroupNodeState | undefined;
            resourceInputs["annotation"] = state ? state.annotation : undefined;
            resourceInputs["description"] = state ? state.description : undefined;
            resourceInputs["from_"] = state ? state.from_ : undefined;
            resourceInputs["name"] = state ? state.name : undefined;
            resourceInputs["nameAlias"] = state ? state.nameAlias : undefined;
            resourceInputs["podMaintenanceGroupDn"] = state ? state.podMaintenanceGroupDn : undefined;
            resourceInputs["to_"] = state ? state.to_ : undefined;
        } else {
            const args = argsOrState as MaintenanceGroupNodeArgs | undefined;
            if ((!args || args.podMaintenanceGroupDn === undefined) && !opts.urn) {
                throw new Error("Missing required property 'podMaintenanceGroupDn'");
            }
            resourceInputs["annotation"] = args ? args.annotation : undefined;
            resourceInputs["description"] = args ? args.description : undefined;
            resourceInputs["from_"] = args ? args.from_ : undefined;
            resourceInputs["name"] = args ? args.name : undefined;
            resourceInputs["nameAlias"] = args ? args.nameAlias : undefined;
            resourceInputs["podMaintenanceGroupDn"] = args ? args.podMaintenanceGroupDn : undefined;
            resourceInputs["to_"] = args ? args.to_ : undefined;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(MaintenanceGroupNode.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering MaintenanceGroupNode resources.
 */
export interface MaintenanceGroupNodeState {
    annotation?: pulumi.Input<string>;
    description?: pulumi.Input<string>;
    from_?: pulumi.Input<string>;
    name?: pulumi.Input<string>;
    nameAlias?: pulumi.Input<string>;
    podMaintenanceGroupDn?: pulumi.Input<string>;
    to_?: pulumi.Input<string>;
}

/**
 * The set of arguments for constructing a MaintenanceGroupNode resource.
 */
export interface MaintenanceGroupNodeArgs {
    annotation?: pulumi.Input<string>;
    description?: pulumi.Input<string>;
    from_?: pulumi.Input<string>;
    name?: pulumi.Input<string>;
    nameAlias?: pulumi.Input<string>;
    podMaintenanceGroupDn: pulumi.Input<string>;
    to_?: pulumi.Input<string>;
}
