// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export class ServerGroup extends pulumi.CustomResource {
    /**
     * Get an existing ServerGroup resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: ServerGroupState, opts?: pulumi.CustomResourceOptions): ServerGroup {
        return new ServerGroup(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'brightbox:index/serverGroup:ServerGroup';

    /**
     * Returns true if the given object is an instance of ServerGroup.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is ServerGroup {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === ServerGroup.__pulumiType;
    }

    /**
     * Is this the default group for the account?
     */
    public /*out*/ readonly default!: pulumi.Output<boolean>;
    /**
     * User editable label
     */
    public readonly description!: pulumi.Output<string | undefined>;
    /**
     * The firewall policy associated with this server group
     */
    public /*out*/ readonly firewallPolicy!: pulumi.Output<string>;
    /**
     * Fully Qualified Domain Name
     */
    public /*out*/ readonly fqdn!: pulumi.Output<string>;
    /**
     * User editable label
     */
    public readonly name!: pulumi.Output<string>;
    public readonly timeouts!: pulumi.Output<outputs.ServerGroupTimeouts | undefined>;

    /**
     * Create a ServerGroup resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args?: ServerGroupArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: ServerGroupArgs | ServerGroupState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as ServerGroupState | undefined;
            resourceInputs["default"] = state ? state.default : undefined;
            resourceInputs["description"] = state ? state.description : undefined;
            resourceInputs["firewallPolicy"] = state ? state.firewallPolicy : undefined;
            resourceInputs["fqdn"] = state ? state.fqdn : undefined;
            resourceInputs["name"] = state ? state.name : undefined;
            resourceInputs["timeouts"] = state ? state.timeouts : undefined;
        } else {
            const args = argsOrState as ServerGroupArgs | undefined;
            resourceInputs["description"] = args ? args.description : undefined;
            resourceInputs["name"] = args ? args.name : undefined;
            resourceInputs["timeouts"] = args ? args.timeouts : undefined;
            resourceInputs["default"] = undefined /*out*/;
            resourceInputs["firewallPolicy"] = undefined /*out*/;
            resourceInputs["fqdn"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(ServerGroup.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering ServerGroup resources.
 */
export interface ServerGroupState {
    /**
     * Is this the default group for the account?
     */
    default?: pulumi.Input<boolean>;
    /**
     * User editable label
     */
    description?: pulumi.Input<string>;
    /**
     * The firewall policy associated with this server group
     */
    firewallPolicy?: pulumi.Input<string>;
    /**
     * Fully Qualified Domain Name
     */
    fqdn?: pulumi.Input<string>;
    /**
     * User editable label
     */
    name?: pulumi.Input<string>;
    timeouts?: pulumi.Input<inputs.ServerGroupTimeouts>;
}

/**
 * The set of arguments for constructing a ServerGroup resource.
 */
export interface ServerGroupArgs {
    /**
     * User editable label
     */
    description?: pulumi.Input<string>;
    /**
     * User editable label
     */
    name?: pulumi.Input<string>;
    timeouts?: pulumi.Input<inputs.ServerGroupTimeouts>;
}
