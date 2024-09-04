// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export class ViewGrant extends pulumi.CustomResource {
    /**
     * Get an existing ViewGrant resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: ViewGrantState, opts?: pulumi.CustomResourceOptions): ViewGrant {
        return new ViewGrant(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'materialize:index/viewGrant:ViewGrant';

    /**
     * Returns true if the given object is an instance of ViewGrant.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is ViewGrant {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === ViewGrant.__pulumiType;
    }

    /**
     * The database that the view belongs to.
     */
    public readonly databaseName!: pulumi.Output<string>;
    /**
     * The privilege to grant to the object.
     */
    public readonly privilege!: pulumi.Output<string>;
    /**
     * The region to use for the resource connection. If not set, the default region is used.
     */
    public readonly region!: pulumi.Output<string>;
    /**
     * The name of the role to grant privilege to.
     */
    public readonly roleName!: pulumi.Output<string>;
    /**
     * The schema that the view being to.
     */
    public readonly schemaName!: pulumi.Output<string>;
    /**
     * The view that is being granted on.
     */
    public readonly viewName!: pulumi.Output<string>;

    /**
     * Create a ViewGrant resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: ViewGrantArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: ViewGrantArgs | ViewGrantState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as ViewGrantState | undefined;
            resourceInputs["databaseName"] = state ? state.databaseName : undefined;
            resourceInputs["privilege"] = state ? state.privilege : undefined;
            resourceInputs["region"] = state ? state.region : undefined;
            resourceInputs["roleName"] = state ? state.roleName : undefined;
            resourceInputs["schemaName"] = state ? state.schemaName : undefined;
            resourceInputs["viewName"] = state ? state.viewName : undefined;
        } else {
            const args = argsOrState as ViewGrantArgs | undefined;
            if ((!args || args.databaseName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'databaseName'");
            }
            if ((!args || args.privilege === undefined) && !opts.urn) {
                throw new Error("Missing required property 'privilege'");
            }
            if ((!args || args.roleName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'roleName'");
            }
            if ((!args || args.schemaName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'schemaName'");
            }
            if ((!args || args.viewName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'viewName'");
            }
            resourceInputs["databaseName"] = args ? args.databaseName : undefined;
            resourceInputs["privilege"] = args ? args.privilege : undefined;
            resourceInputs["region"] = args ? args.region : undefined;
            resourceInputs["roleName"] = args ? args.roleName : undefined;
            resourceInputs["schemaName"] = args ? args.schemaName : undefined;
            resourceInputs["viewName"] = args ? args.viewName : undefined;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(ViewGrant.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering ViewGrant resources.
 */
export interface ViewGrantState {
    /**
     * The database that the view belongs to.
     */
    databaseName?: pulumi.Input<string>;
    /**
     * The privilege to grant to the object.
     */
    privilege?: pulumi.Input<string>;
    /**
     * The region to use for the resource connection. If not set, the default region is used.
     */
    region?: pulumi.Input<string>;
    /**
     * The name of the role to grant privilege to.
     */
    roleName?: pulumi.Input<string>;
    /**
     * The schema that the view being to.
     */
    schemaName?: pulumi.Input<string>;
    /**
     * The view that is being granted on.
     */
    viewName?: pulumi.Input<string>;
}

/**
 * The set of arguments for constructing a ViewGrant resource.
 */
export interface ViewGrantArgs {
    /**
     * The database that the view belongs to.
     */
    databaseName: pulumi.Input<string>;
    /**
     * The privilege to grant to the object.
     */
    privilege: pulumi.Input<string>;
    /**
     * The region to use for the resource connection. If not set, the default region is used.
     */
    region?: pulumi.Input<string>;
    /**
     * The name of the role to grant privilege to.
     */
    roleName: pulumi.Input<string>;
    /**
     * The schema that the view being to.
     */
    schemaName: pulumi.Input<string>;
    /**
     * The view that is being granted on.
     */
    viewName: pulumi.Input<string>;
}
