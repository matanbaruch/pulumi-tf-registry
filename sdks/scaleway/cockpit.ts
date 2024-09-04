// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export class Cockpit extends pulumi.CustomResource {
    /**
     * Get an existing Cockpit resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: CockpitState, opts?: pulumi.CustomResourceOptions): Cockpit {
        return new Cockpit(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'scaleway:index/cockpit:Cockpit';

    /**
     * Returns true if the given object is an instance of Cockpit.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is Cockpit {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === Cockpit.__pulumiType;
    }

    /**
     * Endpoints
     */
    public /*out*/ readonly endpoints!: pulumi.Output<outputs.CockpitEndpoint[]>;
    /**
     * Name or ID of the plan
     */
    public readonly plan!: pulumi.Output<string | undefined>;
    /**
     * The plan ID of the cockpit
     */
    public /*out*/ readonly planId!: pulumi.Output<string>;
    /**
     * The project_id you want to attach the resource to
     */
    public readonly projectId!: pulumi.Output<string>;
    /**
     * Push_url
     */
    public /*out*/ readonly pushUrls!: pulumi.Output<outputs.CockpitPushUrl[]>;
    public readonly timeouts!: pulumi.Output<outputs.CockpitTimeouts | undefined>;

    /**
     * Create a Cockpit resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args?: CockpitArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: CockpitArgs | CockpitState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as CockpitState | undefined;
            resourceInputs["endpoints"] = state ? state.endpoints : undefined;
            resourceInputs["plan"] = state ? state.plan : undefined;
            resourceInputs["planId"] = state ? state.planId : undefined;
            resourceInputs["projectId"] = state ? state.projectId : undefined;
            resourceInputs["pushUrls"] = state ? state.pushUrls : undefined;
            resourceInputs["timeouts"] = state ? state.timeouts : undefined;
        } else {
            const args = argsOrState as CockpitArgs | undefined;
            resourceInputs["plan"] = args ? args.plan : undefined;
            resourceInputs["projectId"] = args ? args.projectId : undefined;
            resourceInputs["timeouts"] = args ? args.timeouts : undefined;
            resourceInputs["endpoints"] = undefined /*out*/;
            resourceInputs["planId"] = undefined /*out*/;
            resourceInputs["pushUrls"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(Cockpit.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering Cockpit resources.
 */
export interface CockpitState {
    /**
     * Endpoints
     */
    endpoints?: pulumi.Input<pulumi.Input<inputs.CockpitEndpoint>[]>;
    /**
     * Name or ID of the plan
     */
    plan?: pulumi.Input<string>;
    /**
     * The plan ID of the cockpit
     */
    planId?: pulumi.Input<string>;
    /**
     * The project_id you want to attach the resource to
     */
    projectId?: pulumi.Input<string>;
    /**
     * Push_url
     */
    pushUrls?: pulumi.Input<pulumi.Input<inputs.CockpitPushUrl>[]>;
    timeouts?: pulumi.Input<inputs.CockpitTimeouts>;
}

/**
 * The set of arguments for constructing a Cockpit resource.
 */
export interface CockpitArgs {
    /**
     * Name or ID of the plan
     */
    plan?: pulumi.Input<string>;
    /**
     * The project_id you want to attach the resource to
     */
    projectId?: pulumi.Input<string>;
    timeouts?: pulumi.Input<inputs.CockpitTimeouts>;
}
