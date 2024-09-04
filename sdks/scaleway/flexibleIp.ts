// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export class FlexibleIp extends pulumi.CustomResource {
    /**
     * Get an existing FlexibleIp resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: FlexibleIpState, opts?: pulumi.CustomResourceOptions): FlexibleIp {
        return new FlexibleIp(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'scaleway:index/flexibleIp:FlexibleIp';

    /**
     * Returns true if the given object is an instance of FlexibleIp.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is FlexibleIp {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === FlexibleIp.__pulumiType;
    }

    /**
     * The date and time of the creation of the Flexible IP (Format ISO 8601)
     */
    public /*out*/ readonly createdAt!: pulumi.Output<string>;
    /**
     * Description of the flexible IP
     */
    public readonly description!: pulumi.Output<string | undefined>;
    /**
     * The IP address of the flexible IP
     */
    public /*out*/ readonly ipAddress!: pulumi.Output<string>;
    /**
     * Defines whether the flexible IP has an IPv6 address
     */
    public readonly isIpv6!: pulumi.Output<boolean | undefined>;
    /**
     * The organization_id you want to attach the resource to
     */
    public /*out*/ readonly organizationId!: pulumi.Output<string>;
    /**
     * The project_id you want to attach the resource to
     */
    public readonly projectId!: pulumi.Output<string>;
    /**
     * The reverse DNS for this flexible IP
     */
    public readonly reverse!: pulumi.Output<string>;
    /**
     * The baremetal server associated with this flexible IP
     */
    public readonly serverId!: pulumi.Output<string | undefined>;
    /**
     * The status of the flexible IP
     */
    public /*out*/ readonly status!: pulumi.Output<string>;
    /**
     * The tags associated with the flexible IP
     */
    public readonly tags!: pulumi.Output<string[] | undefined>;
    public readonly timeouts!: pulumi.Output<outputs.FlexibleIpTimeouts | undefined>;
    /**
     * The date and time of the last update of the Flexible IP (Format ISO 8601)
     */
    public /*out*/ readonly updatedAt!: pulumi.Output<string>;
    /**
     * The zone you want to attach the resource to
     */
    public readonly zone!: pulumi.Output<string>;

    /**
     * Create a FlexibleIp resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args?: FlexibleIpArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: FlexibleIpArgs | FlexibleIpState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as FlexibleIpState | undefined;
            resourceInputs["createdAt"] = state ? state.createdAt : undefined;
            resourceInputs["description"] = state ? state.description : undefined;
            resourceInputs["ipAddress"] = state ? state.ipAddress : undefined;
            resourceInputs["isIpv6"] = state ? state.isIpv6 : undefined;
            resourceInputs["organizationId"] = state ? state.organizationId : undefined;
            resourceInputs["projectId"] = state ? state.projectId : undefined;
            resourceInputs["reverse"] = state ? state.reverse : undefined;
            resourceInputs["serverId"] = state ? state.serverId : undefined;
            resourceInputs["status"] = state ? state.status : undefined;
            resourceInputs["tags"] = state ? state.tags : undefined;
            resourceInputs["timeouts"] = state ? state.timeouts : undefined;
            resourceInputs["updatedAt"] = state ? state.updatedAt : undefined;
            resourceInputs["zone"] = state ? state.zone : undefined;
        } else {
            const args = argsOrState as FlexibleIpArgs | undefined;
            resourceInputs["description"] = args ? args.description : undefined;
            resourceInputs["isIpv6"] = args ? args.isIpv6 : undefined;
            resourceInputs["projectId"] = args ? args.projectId : undefined;
            resourceInputs["reverse"] = args ? args.reverse : undefined;
            resourceInputs["serverId"] = args ? args.serverId : undefined;
            resourceInputs["tags"] = args ? args.tags : undefined;
            resourceInputs["timeouts"] = args ? args.timeouts : undefined;
            resourceInputs["zone"] = args ? args.zone : undefined;
            resourceInputs["createdAt"] = undefined /*out*/;
            resourceInputs["ipAddress"] = undefined /*out*/;
            resourceInputs["organizationId"] = undefined /*out*/;
            resourceInputs["status"] = undefined /*out*/;
            resourceInputs["updatedAt"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(FlexibleIp.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering FlexibleIp resources.
 */
export interface FlexibleIpState {
    /**
     * The date and time of the creation of the Flexible IP (Format ISO 8601)
     */
    createdAt?: pulumi.Input<string>;
    /**
     * Description of the flexible IP
     */
    description?: pulumi.Input<string>;
    /**
     * The IP address of the flexible IP
     */
    ipAddress?: pulumi.Input<string>;
    /**
     * Defines whether the flexible IP has an IPv6 address
     */
    isIpv6?: pulumi.Input<boolean>;
    /**
     * The organization_id you want to attach the resource to
     */
    organizationId?: pulumi.Input<string>;
    /**
     * The project_id you want to attach the resource to
     */
    projectId?: pulumi.Input<string>;
    /**
     * The reverse DNS for this flexible IP
     */
    reverse?: pulumi.Input<string>;
    /**
     * The baremetal server associated with this flexible IP
     */
    serverId?: pulumi.Input<string>;
    /**
     * The status of the flexible IP
     */
    status?: pulumi.Input<string>;
    /**
     * The tags associated with the flexible IP
     */
    tags?: pulumi.Input<pulumi.Input<string>[]>;
    timeouts?: pulumi.Input<inputs.FlexibleIpTimeouts>;
    /**
     * The date and time of the last update of the Flexible IP (Format ISO 8601)
     */
    updatedAt?: pulumi.Input<string>;
    /**
     * The zone you want to attach the resource to
     */
    zone?: pulumi.Input<string>;
}

/**
 * The set of arguments for constructing a FlexibleIp resource.
 */
export interface FlexibleIpArgs {
    /**
     * Description of the flexible IP
     */
    description?: pulumi.Input<string>;
    /**
     * Defines whether the flexible IP has an IPv6 address
     */
    isIpv6?: pulumi.Input<boolean>;
    /**
     * The project_id you want to attach the resource to
     */
    projectId?: pulumi.Input<string>;
    /**
     * The reverse DNS for this flexible IP
     */
    reverse?: pulumi.Input<string>;
    /**
     * The baremetal server associated with this flexible IP
     */
    serverId?: pulumi.Input<string>;
    /**
     * The tags associated with the flexible IP
     */
    tags?: pulumi.Input<pulumi.Input<string>[]>;
    timeouts?: pulumi.Input<inputs.FlexibleIpTimeouts>;
    /**
     * The zone you want to attach the resource to
     */
    zone?: pulumi.Input<string>;
}
