// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export class BusinessService extends pulumi.CustomResource {
    /**
     * Get an existing BusinessService resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: BusinessServiceState, opts?: pulumi.CustomResourceOptions): BusinessService {
        return new BusinessService(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'pagerduty:index/businessService:BusinessService';

    /**
     * Returns true if the given object is an instance of BusinessService.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is BusinessService {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === BusinessService.__pulumiType;
    }

    public readonly description!: pulumi.Output<string>;
    public /*out*/ readonly htmlUrl!: pulumi.Output<string>;
    public readonly name!: pulumi.Output<string>;
    public readonly pointOfContact!: pulumi.Output<string | undefined>;
    public /*out*/ readonly self!: pulumi.Output<string>;
    public /*out*/ readonly summary!: pulumi.Output<string>;
    public readonly team!: pulumi.Output<string | undefined>;
    /**
     * @deprecated Deprecated
     */
    public readonly type!: pulumi.Output<string>;

    /**
     * Create a BusinessService resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args?: BusinessServiceArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: BusinessServiceArgs | BusinessServiceState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as BusinessServiceState | undefined;
            resourceInputs["description"] = state ? state.description : undefined;
            resourceInputs["htmlUrl"] = state ? state.htmlUrl : undefined;
            resourceInputs["name"] = state ? state.name : undefined;
            resourceInputs["pointOfContact"] = state ? state.pointOfContact : undefined;
            resourceInputs["self"] = state ? state.self : undefined;
            resourceInputs["summary"] = state ? state.summary : undefined;
            resourceInputs["team"] = state ? state.team : undefined;
            resourceInputs["type"] = state ? state.type : undefined;
        } else {
            const args = argsOrState as BusinessServiceArgs | undefined;
            resourceInputs["description"] = args ? args.description : undefined;
            resourceInputs["name"] = args ? args.name : undefined;
            resourceInputs["pointOfContact"] = args ? args.pointOfContact : undefined;
            resourceInputs["team"] = args ? args.team : undefined;
            resourceInputs["type"] = args ? args.type : undefined;
            resourceInputs["htmlUrl"] = undefined /*out*/;
            resourceInputs["self"] = undefined /*out*/;
            resourceInputs["summary"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(BusinessService.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering BusinessService resources.
 */
export interface BusinessServiceState {
    description?: pulumi.Input<string>;
    htmlUrl?: pulumi.Input<string>;
    name?: pulumi.Input<string>;
    pointOfContact?: pulumi.Input<string>;
    self?: pulumi.Input<string>;
    summary?: pulumi.Input<string>;
    team?: pulumi.Input<string>;
    /**
     * @deprecated Deprecated
     */
    type?: pulumi.Input<string>;
}

/**
 * The set of arguments for constructing a BusinessService resource.
 */
export interface BusinessServiceArgs {
    description?: pulumi.Input<string>;
    name?: pulumi.Input<string>;
    pointOfContact?: pulumi.Input<string>;
    team?: pulumi.Input<string>;
    /**
     * @deprecated Deprecated
     */
    type?: pulumi.Input<string>;
}
