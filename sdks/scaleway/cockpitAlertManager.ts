// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export class CockpitAlertManager extends pulumi.CustomResource {
    /**
     * Get an existing CockpitAlertManager resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: CockpitAlertManagerState, opts?: pulumi.CustomResourceOptions): CockpitAlertManager {
        return new CockpitAlertManager(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'scaleway:index/cockpitAlertManager:CockpitAlertManager';

    /**
     * Returns true if the given object is an instance of CockpitAlertManager.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is CockpitAlertManager {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === CockpitAlertManager.__pulumiType;
    }

    /**
     * Alert manager URL
     */
    public /*out*/ readonly alertManagerUrl!: pulumi.Output<string>;
    /**
     * A list of contact points
     */
    public readonly contactPoints!: pulumi.Output<outputs.CockpitAlertManagerContactPoint[] | undefined>;
    /**
     * Enable or disable the alert manager
     */
    public readonly enableManagedAlerts!: pulumi.Output<boolean | undefined>;
    /**
     * The project_id you want to attach the resource to
     */
    public readonly projectId!: pulumi.Output<string>;
    /**
     * The region you want to attach the resource to
     */
    public readonly region!: pulumi.Output<string>;

    /**
     * Create a CockpitAlertManager resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args?: CockpitAlertManagerArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: CockpitAlertManagerArgs | CockpitAlertManagerState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as CockpitAlertManagerState | undefined;
            resourceInputs["alertManagerUrl"] = state ? state.alertManagerUrl : undefined;
            resourceInputs["contactPoints"] = state ? state.contactPoints : undefined;
            resourceInputs["enableManagedAlerts"] = state ? state.enableManagedAlerts : undefined;
            resourceInputs["projectId"] = state ? state.projectId : undefined;
            resourceInputs["region"] = state ? state.region : undefined;
        } else {
            const args = argsOrState as CockpitAlertManagerArgs | undefined;
            resourceInputs["contactPoints"] = args ? args.contactPoints : undefined;
            resourceInputs["enableManagedAlerts"] = args ? args.enableManagedAlerts : undefined;
            resourceInputs["projectId"] = args ? args.projectId : undefined;
            resourceInputs["region"] = args ? args.region : undefined;
            resourceInputs["alertManagerUrl"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(CockpitAlertManager.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering CockpitAlertManager resources.
 */
export interface CockpitAlertManagerState {
    /**
     * Alert manager URL
     */
    alertManagerUrl?: pulumi.Input<string>;
    /**
     * A list of contact points
     */
    contactPoints?: pulumi.Input<pulumi.Input<inputs.CockpitAlertManagerContactPoint>[]>;
    /**
     * Enable or disable the alert manager
     */
    enableManagedAlerts?: pulumi.Input<boolean>;
    /**
     * The project_id you want to attach the resource to
     */
    projectId?: pulumi.Input<string>;
    /**
     * The region you want to attach the resource to
     */
    region?: pulumi.Input<string>;
}

/**
 * The set of arguments for constructing a CockpitAlertManager resource.
 */
export interface CockpitAlertManagerArgs {
    /**
     * A list of contact points
     */
    contactPoints?: pulumi.Input<pulumi.Input<inputs.CockpitAlertManagerContactPoint>[]>;
    /**
     * Enable or disable the alert manager
     */
    enableManagedAlerts?: pulumi.Input<boolean>;
    /**
     * The project_id you want to attach the resource to
     */
    projectId?: pulumi.Input<string>;
    /**
     * The region you want to attach the resource to
     */
    region?: pulumi.Input<string>;
}
